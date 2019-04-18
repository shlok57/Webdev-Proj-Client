//TODO moderator should have user object
export class Recipe {
  id: number;
  name: string;
  date_Created: Date;
  moderator : number;
  ingredients: string;
  steps: [string];
  image_Url: string;
  video_Url: string;
  cuisine: string;
  category: string;
  likes: number;
}
