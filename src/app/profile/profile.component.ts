import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../services/user.service.client";
import { User } from "../models/user.model.client";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserServiceClient, private router: Router) {}
  blankUser: User = new User();
  user: User;
  isSaved: Boolean = false;
  ngOnInit() {
    if (!this.user) {
      this.user = this.blankUser;
    }
    this.userService.getProfile().then(user => (this.user = user));
  }

  logout = () =>
    this.userService.logout().then(() => {
      this.user = this.blankUser;
      this.router.navigate(["../login"]);
    });

  updateUser = () =>
    this.userService.updateUser(this.user).then(user => {
      this.user = user;
      this.isSaved = true;
    });
}
