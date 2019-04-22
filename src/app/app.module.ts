import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import {RecipeService} from "./services/recipe.service";
import { CommentComponent } from './components/comment/comment.component';
import {CommentService} from "./services/comment.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    RecipeComponent,
    CommentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
  providers: [
    RecipeService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
