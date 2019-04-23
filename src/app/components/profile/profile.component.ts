import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../../services/user.service.client";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeServiceClient } from "../../services/recipe.service.client";
import { LikeServiceClient } from "../../services/like.service.client";
import { RatingServiceClient } from "../../services/rating.service.client";
import { User } from "../../models/user.model.client";
import { Like } from "../../models/like.model.client";
import { Rating } from "../../models/rating.model.client";
import { Follow } from "../../models/follow.model.client";
import { FollowServiceClient } from "../../services/follow.service.client";
import { Recipe } from "../../models/recipe.model.client";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserServiceClient,
    private recipeService: RecipeServiceClient,
    private likeService: LikeServiceClient,
    private ratingService: RatingServiceClient,
    private followService: FollowServiceClient,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.loadUser(params["username"]));
  }

  notSelfProfile: Boolean = true;
  username = "";
  isUserFollowed = false;
  user: User = new User();
  likedRecipes: Like[] = [];
  ratedRecipes: Rating[] = [];
  followers: Follow[] = [];
  followings: Follow[] = [];
  alertSuccess = false;
  selection = "Liked Recipes";
  newRecipe: Recipe = new Recipe();
  createdRecipes: Recipe[] = [];
  closeResult: string;
  modalReference: NgbModalRef;
  searchText = "";
  isCollapsed = true;

  logout() {
    this.userService.logout().then(() => this.router.navigate(["login"]));
  }

  removeAlert() {
    this.alertSuccess = false;
  }

  createRecipe() {
    this.recipeService
      .createChefsRecipe(this.newRecipe, this.user._id)
      .then(() => {
        this.loadCreatedRecipes();
        this.modalReference.close();
      });
  }

  deleteRecipe(recipe) {
    event.stopPropagation();
    this.recipeService
      .deleteRecipe(recipe._id)
      .then(() => this.loadCreatedRecipes());
  }

  updateRecipe() {
    this.recipeService.updateRecipe(this.newRecipe).then(() => {
      this.loadCreatedRecipes();
      this.modalReference.close();
    });
  }

  unfollow(following) {
    event.stopPropagation();
    this.followService
      .unfollow(following.to._id)
      .then(() => this.loadFollowingForUser());
  }

  unlike(likedRecipe) {
    event.stopPropagation();
    this.likeService
      .unlike(likedRecipe.recipe._id)
      .then(() => this.loadLikedRecipesForUser());
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

  navigateToFoodFoodRecipe(createdRecipe) {
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

  changeSelection(selection) {
    this.selection = selection;
  }

  update(user) {
    this.userService.update(user).then(() => {
      this.alertSuccess = true;
    });
  }

  open(content) {
    this.modalReference = this.modalService.open(content, { size: "lg" });
    this.modalReference.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  openAddModal(content) {
    event.stopPropagation();
    this.newRecipe = new Recipe();
    this.open(content);
  }

  openEditModal(content, recipe) {
    event.stopPropagation();
    this.newRecipe = recipe;
    this.open(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  loadLikedRecipesForUser = () => {
    if (!this.notSelfProfile) {
      this.likeService
        .findLikedRecipesForCurrentUser()
        .then(recipes => (this.likedRecipes = recipes));
    } else {
      this.likeService
        .findLikedRecipesForUser(this.user._id)
        .then(recipes => (this.likedRecipes = recipes));
    }
  };

  loadRatedRecipesForUser = () => {
    if (!this.notSelfProfile) {
      this.ratingService
        .findRatedRecipesForCurrentUser()
        .then(recipes => (this.ratedRecipes = recipes));
    } else {
      this.ratingService
        .findRatedRecipesForUser(this.user._id)
        .then(recipes => (this.ratedRecipes = recipes));
    }
  };

  loadFollowersForUser = () => {
    if (!this.notSelfProfile) {
      this.followService
        .getFollowersForCurrentUser()
        .then(followers => (this.followers = followers));
    } else {
      this.followService.getFollowers(this.user._id).then(followers => {
        this.followers = followers;
        this.isFollowed();
      });
    }
  };

  isFollowed() {
    const followerUserIds = this.followers.map(follow => follow.from._id);
    this.isUserFollowed = !(followerUserIds.indexOf(this.user._id) === -1);
    return this.isUserFollowed;
  }

  follow() {
    if (this.user["username"]) {
      this.followService.follow(this.user._id).then(() => {
        this.loadFollowersForUser();
        this.isUserFollowed = true;
      });
    } else {
      this.router.navigate(["login"]);
    }
  }

  loadFollowingForUser = () => {
    if (!this.notSelfProfile) {
      this.followService
        .getFollowingForCurrentUser()
        .then(followings => (this.followings = followings));
    } else {
      this.followService
        .getFollowing(this.user._id)
        .then(followings => (this.followings = followings));
    }
  };

  loadCreatedRecipes = () => {
    if (!this.notSelfProfile) {
      this.recipeService
        .findCreatedRecipesForCurrentUser()
        .then(recipes => (this.createdRecipes = recipes));
    } else {
      this.recipeService
        .findCreatedRecipesForUser(this.user._id)
        .then(recipes => (this.createdRecipes = recipes));
    }
  };

  loadUser(username) {
    this.username = username;
    if (username === undefined) {
      this.notSelfProfile = false;
      return;
    }
    this.selection = "Liked Recipes";
    this.userService
      .profile()
      .then(user => {
        this.user = user;
      })
      .then(() => {
        if (this.user.username === this.username) {
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

  ngOnInit() {
    if (!this.notSelfProfile) {
      this.userService.profile().then(user => {
        if (user["username"]) {
          if (user.role === "Admin") {
            this.selection = "Manage Users";
          }
          this.user = user;
          this.loadLikedRecipesForUser();
          this.loadRatedRecipesForUser();
          this.loadFollowersForUser();
          this.loadFollowingForUser();
          this.loadCreatedRecipes();
        } else {
          this.router.navigate(["login"]);
        }
      });
    }
  }
}
