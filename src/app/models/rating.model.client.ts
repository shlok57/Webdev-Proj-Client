import { User } from "./user.model.client";
import { Recipe } from "./recipe.model.client";

export class Rating {
  _id: string;
  user: User;
  recipe: Recipe;
  rating: number;
  review: string;
}
