import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConstantsService {
  constructor() {}

  BASE_API_URL = "http://localhost:3000/api/";
}
