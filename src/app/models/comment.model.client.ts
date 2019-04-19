//TODO User attribute connected to user model
import {Recipe} from "./recipe.model.client";

export class Comment {
  id: number;
  User_Id : number;
  Recipe_Id : number;
  Recipe: Recipe;
  Comment: string;
}
