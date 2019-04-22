import { Injectable } from '@angular/core';
import {ConstantsService} from "../commons/constants.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  COMMENT_URL;
  BASE_URL;
  constructor(private constants: ConstantsService) {
    this.COMMENT_URL = constants.BASE_API_URL + 'comment/';
    this.BASE_URL = constants.BASE_API_URL;
  }

  addComment = comment => {

    return fetch(this.BASE_URL + 'user/' + comment.User_Id + '/recipe/' + comment.Recipe_Id + '/comment', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(comment.Comment)
    })
      .then(res => res.text())
      .then(text => text.length ? JSON.parse(text) : {});
  }

  findAllCommentsByRecipeId = recipeId => {

    console.log(recipeId);
    return fetch(this.BASE_URL + 'recipe/' + recipeId + '/comment')
      .then(res => res.text())
      .then(text => text.length ? JSON.parse(text): {});
  }


}
