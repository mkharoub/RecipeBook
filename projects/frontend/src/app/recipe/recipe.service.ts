import {Injectable} from '@angular/core';

import {Recipe} from "./recipe.model";
import {Ingredient} from "../ingredient/Ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChangedSub: Subject<Recipe[]> = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'This is the first recipe',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
      [
        new Ingredient('Tomato', 10),
        new Ingredient('Apple', 7),
      ]
    ),
    new Recipe(
      'Second Recipe',
      'This is the second recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      [
        new Ingredient('Tomato', 10),
        new Ingredient('Apple', 7),
      ]
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

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChangedSub.next(this.getRecipes());
  }

  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipesChangedSub.next(this.getRecipes());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChangedSub.next(this.getRecipes());
  }
}
