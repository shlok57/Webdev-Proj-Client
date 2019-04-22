import { Component, OnInit } from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {}
  showLogin: Boolean = true;
  ngOnInit() {
    if (
      window.location.href.includes("login") ||
      window.location.href.includes("register")
    ) {
      this.showLogin = false;
    }
  }
}
