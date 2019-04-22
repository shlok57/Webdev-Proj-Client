import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../models/user.model.client";
import { UserServiceClient } from "../../services/user.service.client";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserServiceClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.saveParams(params));
  }
  blankUser: User = new User();
  profileUserId: Number;
  user: User;
  selfUser: Boolean = false;
  editMode: Boolean = false;
  isSaved: Boolean = false;
  ngOnInit() {}

  saveParams = params => {
    this.profileUserId = params["uid"];
    if (this.profileUserId) {
      this.userService
        .findUserById(this.profileUserId)
        .then(user => (this.user = user));
    } else {
      this.selfUser = true;
      this.userService.getProfile().then(user => {
        if (!user.hasOwnProperty("msg")) {
          this.user = user;
        } else {
          this.router.navigate(["../login"]);
        }
      });
    }
  };

  toggleEditMode = () => {
    this.editMode = !this.editMode;
  };

  logout = () =>
    this.userService.logout().then(() => {
      this.user = this.blankUser;
      this.router.navigate(["../login"]);
    });

  updateUser = () =>
    this.userService.updateUser(this.user).then(user => {
      this.user = user;
      this.isSaved = true;
      // this.editMode = false;
    });
}
