import {Injectable} from '@angular/core';

import {Ingredient} from "./Ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  selectedIngredientSub: Subject<number> = new Subject<number>();
  ingredientsChangedSub: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Apple', 7),
  ];

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return {...this.ingredients[id]}
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChangedSub.next(this.getIngredients());
  }

  updateIngredient(ingredient: Ingredient, id: number) {
    this.ingredients[id] = ingredient;
    this.ingredientsChangedSub.next(this.getIngredients());
  }

  deleteIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientsChangedSub.next(this.getIngredients());
  }
}
