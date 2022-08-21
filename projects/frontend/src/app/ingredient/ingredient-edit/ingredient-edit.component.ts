import {Component, OnInit} from '@angular/core';

import {IngredientService} from "../ingredient.service";
import {Ingredient} from "../Ingredient.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'fe-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.scss']
})
export class IngredientEditComponent implements OnInit {
  selectedIngredient: Ingredient | undefined;
  selectedIngredientSub$: Subscription | undefined;
  editMode = false;

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit(): void {
    this.selectedIngredientSub$ = this.ingredientService.selectedIngredientSub.subscribe(id => {
      this.editMode = true;
      this.selectedIngredient = this.ingredientService.getIngredient(id);
    });
  }

  onSubmit() {
  }

  onDelete() {
  }

  onClear() {
    this.selectedIngredient = undefined; 
    this.editMode = false;
  }
}
