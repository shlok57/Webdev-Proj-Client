import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserServiceClient } from "../../services/user.service.client";
import { User } from "../../models/user.model.client";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserServiceClient
  ) {
    this.route.params.subscribe(
      params => (this.searchText = params["searchText"])
    );
  }

  logout() {
    this.userService.logout().then(() => this.router.navigate(["login"]));
  }

  searchText = "";
  currentUser: User = new User();
  isCollapsed = true;

  ngOnInit() {
    console.log("Init");
    this.userService.profile().then(response => {
      this.currentUser = response;
      console.log(this.currentUser);
    });
  }

  navigate(searchText) {
    this.router.navigate(["search/" + searchText]);
  }

  goToProfile() {
    this.router.navigate(["profile"]);
  }

  redirectToHome() {
    this.router.navigate(["home"]);
  }
}
