import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserServiceClient } from "../../services/user.service.client";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username;
  password;
  alertUsername = false;

  login(username, password) {
    this.userService.login(username, password).then(user => {
      if (user.username) {
        this.alertUsername = false;
        this.router.navigate(["profile"]);
      } else {
        this.alertUsername = true;
      }
    });
  }

  removeUsernameAlert() {
    this.alertUsername = false;
  }

  constructor(private router: Router, private userService: UserServiceClient) {}

  ngOnInit() {}
}
