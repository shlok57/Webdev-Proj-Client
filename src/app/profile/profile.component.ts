import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../services/user.service.client";
import { User } from "../models/user.model.client";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserServiceClient) {}
  user: User;
  ngOnInit() {
    this.userService.getProfile().then(user => (this.user = user));
  }
}
