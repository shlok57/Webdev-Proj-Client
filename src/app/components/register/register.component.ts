import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../../services/user.service.client";
import { Router } from "@angular/router";
import { User } from "../../models/user.model.client";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserServiceClient, private router: Router) {}

  newUser: User = new User();
  showErr: Boolean = false;
  username: String;
  password1: String;
  password2: String;
  errText: String;

  ngOnInit() {}

  clearErrs = () => {
    this.showErr = false;
  };

  register = () => {
    if (!this.username || !this.password1 || !this.password2) {
      this.errText = "All fields are mandatory";
      this.showErr = true;
      return;
    }

    if (this.password1 !== this.password2) {
      this.errText = "Passwords must match";
      this.showErr = true;
      return;
    }

    this.newUser.Username = this.username;
    this.newUser.Password = this.password1;
    this.newUser.Role = "FOODIE";

    this.userService.register(this.newUser).then(res => {
      if (!res.hasOwnProperty("msg")) {
        this.router.navigate(["../user"]);
      } else {
        this.errText = "Username already exists";
        this.showErr = true;
      }
    });
  };
}
