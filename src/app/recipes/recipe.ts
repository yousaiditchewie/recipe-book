import { Ingredient } from '../../'
export class Recipe {
  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {
    // name = this.name;
    // description = this.description;
    // imagePath = this.imagePath;
  };
}
