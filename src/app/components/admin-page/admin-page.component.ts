import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model.client";
import { UserServiceClient } from "../../services/user.service.client";
import { Router } from "@angular/router";
import { RecipeServiceClient } from "../../services/recipe.service.client";
import { Recipe } from "../../models/recipe.model.client";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "admin-page",
  templateUrl: "./admin-page.component.html",
  styleUrls: ["./admin-page.component.css"]
})
export class AdminPageComponent implements OnInit {
  constructor(
    private userService: UserServiceClient,
    private recipeService: RecipeServiceClient,
    private modalService: NgbModal,
    private router: Router
  ) {}

  chefs: User[] = [];
  critics: User[] = [];
  customers: User[] = [];
  allChefSpecials: Recipe[] = [];
  chefSpecials: Recipe[] = [];
  yummlySpecials: Recipe[] = [];
  allYummlySpecials: Recipe[] = [];
  selection = "Manage Users";
  newRecipe: Recipe = new Recipe();
  newUser: User = new User();
  modalReference: NgbModalRef;
  closeResult: string;
  alertUsername = false;
  yummlyCurrentPage = 1;
  yummlyFirstPage = 1;
  yummlyLastPage = 0;
  chefCurrentPage = 1;
  chefFirstPage = 1;
  chefLastPage = 0;
  currentUser: User = new User();

  loadPageChefRecipes(pageNumber) {
    this.chefCurrentPage = pageNumber;
    const startIndex = (pageNumber - 1) * 10;
    this.chefSpecials = this.allChefSpecials.slice(startIndex, startIndex + 10);
  }

  loadPageYummlyRecipes(pageNumber) {
    this.yummlyCurrentPage = pageNumber;
    const startIndex = (pageNumber - 1) * 10;
    this.yummlySpecials = this.allYummlySpecials.slice(
      startIndex,
      startIndex + 10
    );
  }

  deleteUser(user) {
    event.stopPropagation();
    this.recipeService
      .findCreatedRecipesForUser(user._id)
      .then(recipes =>
        recipes.map(recipe => this.recipeService.deleteRecipe(recipe._id))
      )
      .then(() => this.userService.deleteUser(user._id))
      .then(() => {
        this.loadAllUsers();
        this.loadAllRecipes();
      });
  }

  createUser() {
    this.alertUsername = false;
    this.userService.createUserByAdmin(this.newUser).then(user => {
      if (user.username) {
        this.loadAllUsers();
        this.modalReference.close();
        this.alertUsername = false;
      } else {
        this.alertUsername = true;
      }
    });
  }

  updateUser() {
    this.userService.updateUserByAdmin(this.newUser).then(() => {
      this.loadAllUsers();
      this.modalReference.close();
    });
  }

  deleteRecipe(recipe) {
    event.stopPropagation();
    this.recipeService
      .deleteRecipe(recipe._id)
      .then(() => this.loadAllRecipes());
  }

  updateRecipe() {
    this.recipeService.updateRecipe(this.newRecipe).then(() => {
      this.loadAllRecipes();
      this.modalReference.close();
    });
  }

  navigateToRecipe(recipe) {
    if (recipe.yummlyId) {
      this.router.navigate(["search/" + recipe.name + "/" + recipe.yummlyId]);
    } else {
      this.router.navigate([
        "search/" + recipe.name + "/foodfood-" + recipe._id
      ]);
    }
  }

  navigateToProfile(username) {
    this.router.navigate(["profile/" + username]);
  }

  changeSelection(selection) {
    this.selection = selection;
  }

  open(content) {
    this.modalReference = this.modalService.open(content, { size: "lg" });
    this.modalReference.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  openAddUserModal(content) {
    event.stopPropagation();
    this.newUser = new User();
    this.newRecipe = new Recipe();
    this.newUser["role"] = "";
    this.open(content);
  }

  openEditModal(content, entity) {
    event.stopPropagation();
    if (entity["username"]) {
      this.newUser = entity;
    } else {
      this.newRecipe = entity;
    }
    this.open(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  removeUsernameAlert() {
    this.alertUsername = false;
  }

  loadAllUsers() {
    this.userService.findAllUsers().then(users => {
      const allUsers = users.filter(user => user.role !== "Admin");
      this.chefs = allUsers.filter(user => user.role === "Chef");
      this.critics = allUsers.filter(user => user.role === "Critic");
      this.customers = allUsers.filter(user => user.role === "Customer");
    });
  }

  loadAllRecipes() {
    this.recipeService.findAllRecipes().then(recipes => {
      const allRecipes = recipes;
      this.allChefSpecials = allRecipes.filter(recipe => recipe["createdBy"]);
      this.chefLastPage = Math.ceil(this.allChefSpecials.length / 10);
      this.loadPageChefRecipes(this.chefFirstPage);
      this.allYummlySpecials = allRecipes.filter(
        recipe => !recipe["createdBy"]
      );
      this.yummlyLastPage = Math.ceil(this.allYummlySpecials.length / 10);
      this.loadPageYummlyRecipes(this.yummlyFirstPage);
    });
  }

  ngOnInit() {
    this.userService.profile().then(user => {
      if (user["role"]) {
        if (user["role"] === "Admin") {
          this.currentUser = user;
        } else {
          this.router.navigate(["profile"]);
        }
      } else {
        this.router.navigate(["login"]);
      }
    });
    this.loadAllUsers();
    this.loadAllRecipes();
  }
}
