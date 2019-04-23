import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { YummlyServiceClient } from "src/app/services/yummly.service.client";
import { LikeServiceClient } from "../../services/like.service.client";
import { RecipeServiceClient } from "../../services/recipe.service.client";
import { Recipe } from "../../models/recipe.model.client";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private likeService: LikeServiceClient,
    private recipeService: RecipeServiceClient,
    private yummlyService: YummlyServiceClient
  ) {}

  getImageUrl(url: String) {
    return url.replace("s90", "s320-c-rj-v1-e365");
  }

  text_truncate(name: String) {
    if (name.length > 35) {
      return name.substring(0, 32) + " ...";
    } else {
      return name;
    }
  }

  navigate(yummlyId, recipeName) {
    this.router.navigate(["search/" + recipeName + "/" + yummlyId]);
  }

  navigateToRecipe(recipe) {
    var likedRecipe;
    if (recipe.recipe == undefined) {
      likedRecipe.recipe = recipe;
    } else {
      likedRecipe = recipe;
    }
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

  dishes: any;
  likedRecipes: Recipe[];
  topRatedRecipes: Recipe[];
  ngOnInit() {
    this.yummlyService.findHomePageRecipes().then(res => {
      this.dishes = res.matches;
    });
    this.likeService
      .findLikedRecipesForCurrentUser()
      .then(recipes => (this.likedRecipes = recipes))
      .then(() => (this.likedRecipes = this.likedRecipes.slice(0, 5)));

    this.recipeService
      .findAllRecipes()
      .then(recipes => (this.topRatedRecipes = recipes))
      .then(() => {
        this.topRatedRecipes = this.topRatedRecipes.slice(0, 5);
        this.topRatedRecipes = this.topRatedRecipes.sort((a, b) => {
          try {
            var aNo: any = a.numberOfServings;
            var bNo: any = b.numberOfServings;
            return aNo - bNo;
          } catch (e) {
            return 0;
          }
        });
      });
  }
}
