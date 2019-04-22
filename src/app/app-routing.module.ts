import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RecipeComponent } from "./components/recipe/recipe.component";
import { CommentComponent } from "./components/comment/comment.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "user", component: ProfileComponent },
  { path: "user/:uid", component: ProfileComponent },
  { path: "recipe/:recipeId", component: RecipeComponent },
  { path: "recipe/:recipeId/comment", component: CommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
