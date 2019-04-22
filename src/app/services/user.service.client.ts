import { Injectable } from "@angular/core";
import { ConstantsService } from "../commons/constants.service";
import { User } from "../models/user.model.client";

@Injectable({
  providedIn: "root"
})
export class UserServiceClient {
  baseURL: String;
  constructor(private constants: ConstantsService) {
    this.baseURL = constants.BASE_API_URL;
  }

  login = (user: User) => {
    return fetch(this.baseURL + "login", {
      body: JSON.stringify(user),
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" }
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  getProfile = () => {
    return fetch(this.baseURL + "user", {
      credentials: "include"
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  logout = () => {
    return fetch(this.baseURL + "logout", {
      method: "POST",
      credentials: "include"
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  updateUser = (user: User) => {
    return fetch(this.baseURL + "user/" + user._id, {
      body: JSON.stringify(user),
      method: "PUT",
      credentials: "include",
      headers: { "content-type": "application/json" }
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  register = (user: User) => {
    return fetch(this.baseURL + "register", {
      body: JSON.stringify(user),
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" }
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  findUserById = (uid: Number) => {
    return fetch(this.baseURL + "user/" + uid.toString(), {
      credentials: "include"
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };
}
