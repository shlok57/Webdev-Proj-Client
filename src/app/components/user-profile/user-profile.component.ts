import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../models/user.model.client";
import { UserServiceClient } from "../../services/user.service.client";
import { Like } from "../../models/like.model.client";
import { Rating } from "../../models/rating.model.client";
import { LikeServiceClient } from "../../services/like.service.client";
import { RatingServiceClient } from "../../services/rating.service.client";
import { FollowServiceClient } from "../../services/follow.service.client";
import { Follow } from "../../models/follow.model.client";
import { Recipe } from "../../models/recipe.model.client";
import { RecipeServiceClient } from "../../services/recipe.service.client";

@Component({
  selector: "user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceClient,
    private likeService: LikeServiceClient,
    private ratingService: RatingServiceClient,
    private followService: FollowServiceClient,
    private recipeService: RecipeServiceClient,
    private router: Router
  ) {
    alert("zxc");
    this.route.params.subscribe(params => this.loadUser(params["username"]));
  }

  username = "";
  currentUser: User = new User();
  user: User = new User();
  likedRecipes: Like[] = [];
  ratedRecipes: Rating[] = [];
  followers: Follow[] = [];
  followings: Follow[] = [];
  selection = "Liked Recipes";
  isUserFollowed = false;
  createdRecipes: Recipe[] = [];
  searchText = "";
  isCollapsed = true;

  follow() {
    if (this.currentUser["username"]) {
      this.followService.follow(this.user._id).then(() => {
        this.loadFollowersForUser();
        this.isUserFollowed = true;
      });
    } else {
      this.router.navigate(["login"]);
    }
  }

  unfollow() {
    this.followService.unfollow(this.user._id).then(() => {
      this.isUserFollowed = false;
      this.loadFollowersForUser();
    });
  }

  isFollowed() {
    const followerUserIds = this.followers.map(follow => follow.from._id);
    this.isUserFollowed = !(
      followerUserIds.indexOf(this.currentUser._id) === -1
    );
    return this.isUserFollowed;
  }

  loadUser(username) {
    this.username = username;
    this.selection = "Liked Recipes";
    this.userService
      .profile()
      .then(user => {
        this.currentUser = user;
      })
      .then(() => {
        if (this.currentUser.username === this.username) {
          this.router.navigate(["profile"]);
        }
      });
    this.userService.profileOfUser(username).then(user => {
      console.log(user);
      if (user.role === "Admin") {
        this.router.navigate(["profile"]);
      }
      this.user = user;
      this.loadLikedRecipesForUser();
      this.loadRatedRecipesForUser();
      this.loadFollowersForUser();
      this.loadFollowingForUser();
      this.loadCreatedRecipes();
    });
  }

  navigate(searchText) {
    this.router.navigate(["search/" + searchText]);
  }

  navigateToRecipe(likedRecipe) {
    if (likedRecipe.recipe.yummlyId) {
      this.router.navigate([
        "search/" + likedRecipe.recipe.name + "/" + likedRecipe.recipe.yummlyId
      ]);
    } else {
      this.router.navigate([
        "search/" +
          likedRecipe.recipe.name +
          "/foodfood-" +
          likedRecipe.recipe._id
      ]);
    }
  }

  navigateToFoodfoodRecipe(createdRecipe) {
    this.router.navigate([
      "search/" + createdRecipe.name + "/foodfood-" + createdRecipe._id
    ]);
  }

  navigateToFollowerProfile(follower) {
    this.router.navigate(["profile/" + follower.from.username]);
  }

  navigateToFollowingProfile(following) {
    this.router.navigate(["profile/" + following.to.username]);
  }

  loadLikedRecipesForUser() {
    this.likeService
      .findLikedRecipesForUser(this.user._id)
      .then(recipes => (this.likedRecipes = recipes));
  }

  loadRatedRecipesForUser() {
    this.ratingService
      .findRatedRecipesForUser(this.user._id)
      .then(recipes => (this.ratedRecipes = recipes));
  }

  loadFollowersForUser() {
    this.followService.getFollowers(this.user._id).then(followers => {
      this.followers = followers;
      this.isFollowed();
    });
  }

  loadFollowingForUser() {
    this.followService
      .getFollowing(this.user._id)
      .then(followings => (this.followings = followings));
  }

  loadCreatedRecipes() {
    this.recipeService
      .findCreatedRecipesForUser(this.user._id)
      .then(recipes => (this.createdRecipes = recipes));
  }

  changeSelection(selection) {
    this.selection = selection;
  }

  goToProfile() {
    this.router.navigate(["profile"]);
  }

  ngOnInit() {}
}
