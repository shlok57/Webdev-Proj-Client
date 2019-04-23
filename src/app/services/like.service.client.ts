export class LikeServiceClient {
  LOCAL_URL = "http://localhost:4000";
  REMOTE_URL = "https://webdev-proj-server.herokuapp.com";

  VARIABLE_URL = this.REMOTE_URL;

  RECIPE_URL = this.VARIABLE_URL + "/api/recipe";

  CURRENT_USER_LIKE_URL = this.VARIABLE_URL + "/api/user/likedRecipe";
  USER_LIKE_URL = this.VARIABLE_URL + "/api/user/UID/likedRecipe";

  like(recipeId) {
    return fetch(this.RECIPE_URL + "/" + recipeId + "/like", {
      method: "post",
      credentials: "include"
    });
  }

  unlike(recipeId) {
    return fetch(this.RECIPE_URL + "/" + recipeId + "/unlike", {
      method: "delete",
      credentials: "include"
    });
  }

  findLikedRecipesForCurrentUser() {
    return fetch(this.CURRENT_USER_LIKE_URL, {
      credentials: "include"
    }).then(response => response.json());
  }

  findLikedRecipesForUser(userId) {
    return fetch(this.USER_LIKE_URL.replace("UID", userId)).then(response =>
      response.json()
    );
  }

  findLikedUsersForRecipe(recipeId) {
    return fetch(this.RECIPE_URL + "/" + recipeId + "/likedUser").then(
      response => response.json()
    );
  }
}
