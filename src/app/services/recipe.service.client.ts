export class RecipeServiceClient {
  LOCAL_URL = "http://localhost:4000";
  REMOTE_URL = "https://webdev-proj-server.herokuapp.com";

  VARIABLE_URL = this.REMOTE_URL;

  RECIPE_URL = this.VARIABLE_URL + "/api/recipe";
  CURRENT_USER_CREATED_RECIPE_URL =
    this.VARIABLE_URL + "/api/user/createdRecipe";
  USER_CREATED_RECIPE_URL = this.VARIABLE_URL + "/api/user/UID/createdRecipe";

  createRecipe = result => {
    const recipe = {
      name: result["name"],
      ingredients: result["ingredientLines"].join("\n"),
      imageUrl: result["images"][0]["imageUrlsBySize"][360],
      totalTime: result["totalTime"],
      numberOfServings: result["numberOfServings"],
      yummlyRating: result["rating"],
      yummlyId: result["id"],
      sourceRecipeUrl: result["source"]["sourceRecipeUrl"]
    };
    return fetch(this.RECIPE_URL, {
      method: "post",
      body: JSON.stringify(recipe),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json());
  };

  createChefsRecipe = (newRecipe, chefId) => {
    const recipe = {
      name: newRecipe["name"],
      ingredients: newRecipe["ingredients"],
      imageUrl: newRecipe["imageUrl"],
      totalTime: newRecipe["totalTime"],
      numberOfServings: newRecipe["numberOfServings"],
      createdBy: "CHEF",
      chef: chefId
    };
    return fetch(this.RECIPE_URL, {
      method: "post",
      body: JSON.stringify(recipe),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json());
  };

  findRecipeByYummlyId = yummyId => {
    return fetch(this.RECIPE_URL + "/yummly/" + yummyId)
      .then(response => response.text())
      .then(text => (text.length ? JSON.parse(text) : {}));
  };

  findRecipeById = recipeId => {
    return fetch(this.RECIPE_URL + "/" + recipeId)
      .then(response => response.text())
      .then(text => (text.length ? JSON.parse(text) : {}));
  };

  findRecipesBySearchQuery = searchText => {
    return fetch(this.RECIPE_URL + "/search/" + searchText).then(response =>
      response.json()
    );
  };

  findCreatedRecipesForCurrentUser = () => {
    return fetch(this.CURRENT_USER_CREATED_RECIPE_URL, {
      credentials: "include"
    }).then(response => response.json());
  };

  findCreatedRecipesForUser = userId => {
    return fetch(this.USER_CREATED_RECIPE_URL.replace("UID", userId)).then(
      response => response.json()
    );
  };

  findAllRecipes = () => {
    return fetch(this.RECIPE_URL).then(response => response.json());
  };

  deleteRecipe = recipeId => {
    return fetch(this.RECIPE_URL + "/" + recipeId, {
      method: "delete"
    });
  };

  updateRecipe = newRecipe => {
    return fetch(this.RECIPE_URL + "/" + newRecipe._id, {
      method: "put",
      body: JSON.stringify(newRecipe),
      headers: {
        "content-type": "application/json"
      }
    });
  };
}
