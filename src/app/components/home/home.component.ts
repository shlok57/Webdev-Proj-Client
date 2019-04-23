import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { YummlyServiceClient } from "src/app/services/yummly.service.client";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private yummlyService: YummlyServiceClient
  ) {}

  slides = [
    {
      imageSrc:
        "http://www.hhdenver.com/data1/images/fullhdwallpaperfood65.jpg",
      mainHeading: "OUR RECIPES",
      subHeading:
        "Tried, tested, tasted and reviewed by the best of critics and our thousands of customers and chefs"
    },
    {
      imageSrc:
        "https://dmkz2i5qfmsty.cloudfront.net/aa7c2b48-6a24-4cf1-81de-682a0ed78ed3.jpg",
      mainHeading: "OUR SERVICE",
      subHeading: "Search among thousands of chef specials!"
    }
  ];

  getImageUrl(url: String) {
    return url.replace("s90", "s320-c-rj-v1-e365");
  }

  text_truncate(name: String) {
    if (name.length > 35) {
      return name.substring(0, 32) + " ...";
    } else {
      return name;
    }
  }

  navigate(yummlyId, recipeName) {
    this.router.navigate(["search/" + recipeName + "/" + yummlyId]);
  }

  dishes: any;
  ngOnInit() {
    this.yummlyService.findHomePageRecipes().then(res => {
      this.dishes = res.matches;
      console.log(this.dishes);
    });
  }
}
