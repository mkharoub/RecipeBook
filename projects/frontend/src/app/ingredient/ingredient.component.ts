import {Component, OnInit} from '@angular/core';

import {Ingredient} from "./Ingredient.model";
import {IngredientService} from "./ingredient.service";

@Component({
  selector: 'fe-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  ingredients: Ingredient[] | undefined;

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
  }

  onSelect(id: number) {
    this.ingredientService.selectedIngredientSub?.next(id);
  }
}
