import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeComponent} from "./components/recipe/recipe.component";
import {CommentComponent} from "./components/comment/comment.component";

const routes: Routes = [

  {path:'recipe/:recipeId', component: RecipeComponent},
  {path:'recipe/:recipeId/comment', component: CommentComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

