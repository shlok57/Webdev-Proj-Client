import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private service: CommentService, private activatedRoute: ActivatedRoute) { }

  recipeId;
  comments: Comment[];

  ngOnInit() {

    console.log("asd");
      this.activatedRoute.params.subscribe(params => {
        this.recipeId = params['recipeId'];
        this.service.findAllCommentsByRecipeId(this.recipeId)
          .then(comments => this.comments = comments);
      })
  }

}
