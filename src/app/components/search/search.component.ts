import { Component, OnInit } from "@angular/core";
import { YummlyServiceClient } from "../../services/yummly.service.client";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../../models/recipe.model.client";
import { RecipeServiceClient } from "../../services/recipe.service.client";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(
    private yummlyService: YummlyServiceClient,
    private route: ActivatedRoute,
    private recipeService: RecipeServiceClient,
    private router: Router
  ) {
    this.route.params.subscribe(params => this.setSearchText(params));
    this.searchRecipes(this.searchText, 1);
  }

  searchText = "";
  yummlyResults = [];
  foodfoodResults: Recipe[] = [];
  currentPage = 1;
  firstPage = 1;
  lastPage = 0;

  setSearchText(params) {
    this.searchText = params["searchText"];
    this.searchRecipes(this.searchText, 1);
  }

  searchRecipes(input, pageNumber) {
    this.currentPage = pageNumber;
    const query = input.replace("%20", "+");
    this.yummlyService
      .findAllRecipes(query, pageNumber)
      .then(results => {
        this.lastPage = Math.ceil(results["totalMatchCount"] / 10);
        this.yummlyResults = results["matches"];
        return this.recipeService.findRecipesBySearchQuery(query);
      })
      .then(recipes => {
        this.foodfoodResults = recipes;
      });
  }

  navigateYum(yummlyId) {
    this.router.navigate(["search/" + this.searchText + "/" + yummlyId]);
  }

  navigateFoodfood(foodId) {
    this.router.navigate(["search/" + this.searchText + "/foodfood-" + foodId]);
  }

  ngOnInit() {}
}
