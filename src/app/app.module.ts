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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
