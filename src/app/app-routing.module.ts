import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeComponent} from "./components/recipe/recipe.component";

const routes: Routes = [

  {path: 'recipe', component: RecipeComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

