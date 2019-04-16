import { Component, OnInit } from "@angular/core";
import { User } from "../models/user.model.client";
import { UserServiceClient } from "../services/user.service.client";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserServiceClient, private router: Router) {}
  user: User = {
    Username: "shlok",
    Password: "foobar"
  };
  ngOnInit() {}

  login = () => {
    // alert(":ipo");
    this.userService.login(this.user).then(user => {
      if (user) {
        this.router.navigate(["../user"]);
      }
    });
  };
}
