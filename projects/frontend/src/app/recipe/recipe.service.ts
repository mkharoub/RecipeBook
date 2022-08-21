import {Injectable} from '@angular/core';

import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'This is the first recipe',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'
    ),
    new Recipe(
      'Second Recipe',
      'This is the second recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return {...this.recipes[id]}
  }
}
