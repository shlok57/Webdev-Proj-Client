import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "search/:searchText", component: SearchComponent },
  { path: "search/:searchText/:recipeId", component: RecipeDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "profile/:username", component: UserProfileComponent },
  { path: "admin", component: AdminPageComponent },
  { path: "**", component: HomeComponent } // last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
