export class RatingServiceClient {
  LOCAL_URL = "http://localhost:4000";
  REMOTE_URL = "https://webdev-proj-server.herokuapp.com";

  VARIABLE_URL = this.REMOTE_URL;

  RECIPE_URL = this.VARIABLE_URL + "/api/recipe";
  CURRENT_USER_RATING_URL = this.VARIABLE_URL + "/api/user/ratedRecipe";
  USER_RATING_URL = this.VARIABLE_URL + "/api/user/UID/ratedRecipe";
  RATING_URL = this.VARIABLE_URL + "/api/rating/RATID";

  rate(recipeId, rating, review) {
    let ratingObject;
    if (review === "") {
      ratingObject = {
        rating
      };
    } else {
      ratingObject = {
        rating,
        review
      };
    }
    return fetch(this.RECIPE_URL + "/" + recipeId + "/rating", {
      method: "post",
      credentials: "include",
      body: JSON.stringify(ratingObject),
      headers: {
        "content-type": "application/json"
      }
    });
  }

  updateRating(ratingId, rating, review) {
    let ratingObject;
    if (review === "") {
      ratingObject = {
        rating
      };
    } else {
      ratingObject = {
        rating,
        review
      };
    }
    return fetch(this.RATING_URL.replace("RATID", ratingId), {
      method: "put",
      body: JSON.stringify(ratingObject),
      headers: {
        "content-type": "application/json"
      }
    });
  }

  findRatedRecipesForCurrentUser() {
    return fetch(this.CURRENT_USER_RATING_URL, {
      credentials: "include"
    }).then(response => response.json());
  }

  findRatedRecipesForUser(userId) {
    return fetch(this.USER_RATING_URL.replace("UID", userId)).then(response =>
      response.json()
    );
  }

  findRatedUsersForRecipe(recipeId) {
    return fetch(this.RECIPE_URL + "/" + recipeId + "/ratedUser").then(
      response => response.json()
    );
  }
}
