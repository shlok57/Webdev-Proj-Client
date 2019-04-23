import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../../services/user.service.client";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserServiceClient, private router: Router) {}

  username;
  password;
  password2;
  userRole = "";

  alertPassword = false;
  alertUsername = false;

  removeAlert = () => {
    this.alertPassword = false;
  };

  removeUsernameAlert = () => {
    this.alertUsername = false;
  };

  checkPasswords = (password, password2) => {
    if (password !== password2) {
      this.alertPassword = true;
    } else {
      this.alertPassword = false;
    }
  };

  register = (username, password, password2) => {
    this.checkPasswords(password, password2);
    this.alertUsername = false;

    if (this.alertPassword === false) {
      this.userService
        .createUser(username, password, this.userRole)
        .then(user => {
          if (user.username) {
            this.alertUsername = false;
            this.router.navigate(["profile"]);
          } else {
            this.alertUsername = true;
          }
        });
    }
  };

  ngOnInit() {}
}
