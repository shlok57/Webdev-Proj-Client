import { Injectable } from '@angular/core';
import {ConstantsService} from "../commons/constants.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  RECIPE_URL;
  constructor(private constants: ConstantsService) {

    this.RECIPE_URL = constants.BASE_API_URL + 'recipe/';
  }

  createRecipe = recipe => {

    return fetch(this.RECIPE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
      .then(res => res.text())
      .then(text => text.length ? JSON.parse(text) : {});
  }

  findAllRecipes = () => {

    return fetch(this.RECIPE_URL)
      .then(response => response.json())
      .catch(error => Promise.reject('Error in search'));
  }

  findRecipeById = recipeId => {

    console.log(recipeId);
    return fetch(this.RECIPE_URL + recipeId)
      .then(response => response.json())
      .catch(error => Promise.reject("Error in search"));
  }

  updateRecipe = (recipeId, updatedRecipe) => {

    return fetch(this.RECIPE_URL + recipeId, {
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedRecipe)
    })
      .then(recipe => recipe.json())
      .then(err => Promise.reject("Error in update"));
  }

  removeRecipe = recipeId => {

    return fetch(this.RECIPE_URL + recipeId, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .catch(err => Promise.reject("Error in remove"));
  }

}
