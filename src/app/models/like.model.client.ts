import {User} from './user.model.client';
import {Recipe} from './recipe.model.client';

export class Like {
  _id: string;
  user: User;
  recipe: Recipe;
}
