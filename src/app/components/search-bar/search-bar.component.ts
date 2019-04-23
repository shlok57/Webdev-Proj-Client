import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserServiceClient } from "../../services/user.service.client";
import { User } from "../../models/user.model.client";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserServiceClient
  ) {
    this.route.params.subscribe(
      params => (this.searchText = params["searchText"])
    );
  }

  searchText = "";
  currentUser: User = new User();
  isCollapsed = true;

  ngOnInit() {
    this.userService.profile().then(response => {
      this.currentUser = response;
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
