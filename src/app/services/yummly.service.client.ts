export class YummlyServiceClient {
  YUMMLY_SEARCH_API_URL =
    "https://api.yummly.com/v1/api/recipes?_app_id=2d8ae64b&_app_key=00c159ff00a68d8e4e38083ac3a4bdd6&" +
    "q=QUERY&" +
    "maxResult=10&" +
    "start=STARTINDEX&" +
    "requirePictures=true";

  YUMMLY_GET_API_URL =
    "https://api.yummly.com/v1/api/recipe/RECIPEID?_app_id=2d8ae64b&_app_key=00c159ff00a68d8e4e38083ac3a4bdd6";

  YUMMLY_HOME_RECIPIES_URL =
    "https://api.yummly.com/v1/api/recipes?_app_id=2d8ae64b&_app_key=00c159ff00a68d8e4e38083ac3a4bdd6" +
    "&maxResult=12&requirePictures=true";

  findAllRecipes(query, pageNumber) {
    const startIndex = (pageNumber - 1) * 10;
    return fetch(
      this.YUMMLY_SEARCH_API_URL.replace("QUERY", query).replace(
        "STARTINDEX",
        startIndex.toString()
      )
    ).then(response => response.json());
  }

  findRecipeById(recipeId) {
    return fetch(this.YUMMLY_GET_API_URL.replace("RECIPEID", recipeId)).then(
      response => response.json()
    );
  }

  findHomePageRecipes() {
    let url = this.YUMMLY_HOME_RECIPIES_URL;
    return fetch(url, {
      credentials: "include"
    }).then(response => response.json());
  }
}
