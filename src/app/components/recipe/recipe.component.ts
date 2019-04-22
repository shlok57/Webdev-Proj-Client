import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../services/recipe.service";
import {Recipe} from "../../models/recipe.model.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private service: RecipeService, private activatedRoute: ActivatedRoute) { }

  recipe: Recipe = new Recipe();
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.recipe.id = params['recipeId'];
      this.service.findRecipeById(this.recipe.id)
        .then(recipe => {
          this.recipe = recipe;
          console.log(recipe);
          console.log(this.recipe);
        }
        );
    });
  }

}
