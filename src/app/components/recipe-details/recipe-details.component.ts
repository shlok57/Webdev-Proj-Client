import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { YummlyServiceClient } from "../../services/yummly.service.client";
import { RecipeServiceClient } from "../../services/recipe.service.client";
import { LikeServiceClient } from "../../services/like.service.client";
import { RatingServiceClient } from "../../services/rating.service.client";
import { User } from "../../models/user.model.client";
import { UserServiceClient } from "../../services/user.service.client";
import { Like } from "../../models/like.model.client";
import { Rating } from "../../models/rating.model.client";

@Component({
  selector: "recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private yummlyService: YummlyServiceClient,
    private likeService: LikeServiceClient,
    private ratingService: RatingServiceClient,
    private recipeService: RecipeServiceClient,
    private userService: UserServiceClient
  ) {
    this.route.params.subscribe(params => this.setRecipeId(params));
  }

  recipeDetails = {};
  yummlyId = "";
  recipeId = "";
  likedUsers: Like[] = [];
  ratedUsers: Rating[] = [];
  reviewedUsers: Rating[] = [];
  currentUser: User = new User();
  ingredientsCount = "";
  totalTime = "";
  totalTimeUnit = "";
  isRecipeLiked = false;
  newRating = 0;
  newReview = "";
  myRatings: Rating[] = [];
  myRatingId = "";
  alertReview = false;

  changeRating(newRating) {
    this.newRating = newRating;
  }

  like() {
    if (this.currentUser["username"]) {
      this.likeService.like(this.recipeId).then(() => {
        this.isRecipeLiked = true;
        this.loadLikedUsersForRecipe(this.recipeId);
      });
    } else {
      this.router.navigate(["login"]);
    }
  }

  unlike() {
    this.likeService.unlike(this.recipeId).then(() => {
      this.isRecipeLiked = false;
      this.loadLikedUsersForRecipe(this.recipeId);
    });
  }

  isLiked() {
    const likedUserIds = this.likedUsers.map(like => like.user._id);
    this.isRecipeLiked = !(likedUserIds.indexOf(this.currentUser._id) === -1);
    return this.isRecipeLiked;
  }

  rate() {
    if (this.currentUser["username"]) {
      this.alertReview = true;
      this.ratingService
        .rate(this.recipeId, this.newRating, this.newReview)
        .then(() => this.loadRatedUsersForRecipe(this.recipeId));
    } else {
      this.router.navigate(["login"]);
    }
  }

  removeReviewAlert() {
    this.alertReview = false;
  }

  updateRating() {
    this.alertReview = true;
    this.ratingService
      .updateRating(this.myRatingId, this.newRating, this.newReview)
      .then(() => this.loadRatedUsersForRecipe(this.recipeId));
  }

  setRecipeId(params) {
    this.yummlyId = params["recipeId"];
    this.findRecipeById(this.yummlyId);
  }

  getImageUrl() {
    if (this.recipeDetails["imageUrl"]) {
      return "url(" + this.recipeDetails["imageUrl"] + ")";
    }
  }

  loadLikedUsersForRecipe(recipeId) {
    this.likeService
      .findLikedUsersForRecipe(recipeId)
      .then(users => (this.likedUsers = users))
      .then(() => this.isLiked());
  }

  loadRatedUsersForRecipe(recipeId) {
    this.ratingService.findRatedUsersForRecipe(recipeId).then(ratings => {
      this.myRatings = ratings.filter(
        rating => rating.user._id === this.currentUser._id
      );
      if (this.myRatings.length > 0) {
        this.myRatingId = this.myRatings[0]._id;
        this.newRating = this.myRatings[0].rating;
        this.newReview = this.myRatings[0].review;
      }
      this.ratedUsers = ratings;
     /* this.reviewedUsers = ratings.filter(
        rating => rating.user.role === "Critic"
      );*/
    });
  }

  goToUserProfile(username) {
    this.router.navigate(["/profile/" + username]);
  }

  loadRecipeDetails(recipe) {
    recipe["ingredients"] = recipe["ingredients"].split("\n");
    this.ingredientsCount = recipe["ingredients"].length;
    if (recipe["totalTime"]) {
      this.totalTime = recipe["totalTime"].substr(
        0,
        recipe["totalTime"].indexOf(" ")
      );
      this.totalTimeUnit = recipe["totalTime"].substr(
        recipe["totalTime"].indexOf(" ") + 1
      );
    }
    this.recipeDetails = recipe;
    this.recipeId = recipe["_id"];
    this.loadRatedUsersForRecipe(this.recipeId);
    this.loadLikedUsersForRecipe(this.recipeId);
  }

  findRecipeById(yummlyId) {
    if (yummlyId.startsWith("foodfood-")) {
      this.recipeService.findRecipeById(yummlyId.substr(9)).then(response => {
        if (response["name"]) {
          this.loadRecipeDetails(response);
        }
      });
    } else {
      this.recipeService.findRecipeByYummlyId(yummlyId).then(response => {
        if (response["name"]) {
          this.loadRecipeDetails(response);
        } else {
          this.yummlyService
            .findRecipeById(yummlyId)
            .then(result => this.recipeService.createRecipe(result))
            .then(recipe => {
              if (recipe["ingredients"]) {
                this.loadRecipeDetails(recipe);
              }
            });
        }
      });
    }
  }

  ngOnInit() {
    this.userService.profile().then(response => {
      this.currentUser = response;
    });
  }
}
