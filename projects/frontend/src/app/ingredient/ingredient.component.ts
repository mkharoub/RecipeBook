import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {Ingredient} from "./Ingredient.model";
import {IngredientService} from "./ingredient.service";

@Component({
  selector: 'fe-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] | undefined;
  ingredientsChangedSub$: Subscription | undefined;

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientsChangedSub$ = this.ingredientService.ingredientsChangedSub.subscribe(ingredients => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy() {
    this.ingredientsChangedSub$?.unsubscribe();
  }

  onSelect(id: number) {
    this.ingredientService.selectedIngredientSub?.next(id);
  }
}
