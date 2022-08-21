import {Injectable} from '@angular/core';

import {Ingredient} from "./Ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  selectedIngredientSub: Subject<number> = new Subject<number>();
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
}
