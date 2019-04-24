import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RecipeServiceClient } from "./services/recipe.service.client";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule, WavesModule } from "angular-bootstrap-md";
import { FollowServiceClient } from "./services/follow.service.client";
import { RatingServiceClient } from "./services/rating.service.client";
import { LikeServiceClient } from "./services/like.service.client";
import { UserServiceClient } from "./services/user.service.client";
import { YummlyServiceClient } from "./services/yummly.service.client";
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    AdminPageComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    CarouselModule,
    WavesModule
  ],
  providers: [
    YummlyServiceClient,
    RecipeServiceClient,
    UserServiceClient,
    LikeServiceClient,
    RatingServiceClient,
    FollowServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
