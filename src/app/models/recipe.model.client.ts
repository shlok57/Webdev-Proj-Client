//TODO moderator should have user object
export class Recipe {
  _id: number;
  Description: String;
  Name: string;
  Date_Created: Date;
  Moderator : number;
  Ingredients: [string];
  Steps: [string];
  Image_Url: string;
  Video_Url: string;
  Cuisine: string;
  Category: string;
  Likes: number;
}
