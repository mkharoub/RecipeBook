import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";

import {IngredientService} from "../ingredient.service";
import {Ingredient} from "../Ingredient.model";

@Component({
  selector: 'fe-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.scss']
})
export class IngredientEditComponent implements OnInit, OnDestroy {
  @ViewChild('ingredientFrom') ingredientForm: NgForm | undefined;

  selectedIngredientSub$: Subscription | undefined;
  editMode = false;
  selectedIngredientId: number | undefined

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit(): void {
    this.selectedIngredientSub$ = this.ingredientService.selectedIngredientSub.subscribe(id => {
      this.editMode = true;
      this.selectedIngredientId = id;

      const selectedIngredient = this.ingredientService.getIngredient(id);

      this.ingredientForm?.setValue({
        name: selectedIngredient.name,
        amount: selectedIngredient.amount
      })
    });
  }

  ngOnDestroy() {
    this.selectedIngredientSub$?.unsubscribe();
  }

  onSubmit() {
    if (this.ingredientForm?.valid) {
      const name = this.ingredientForm.value.name;
      const amount = this.ingredientForm.value.amount;

      if (this.editMode) {
        this.ingredientService.updateIngredient(new Ingredient(name, amount), this.selectedIngredientId as any);
      } else {
        this.ingredientService.addIngredient(new Ingredient(name, amount));
      }

      this.onClear();
    }
  }

  onDelete() {
    this.ingredientService.deleteIngredient(this.selectedIngredientId as any);
    this.onClear();
  }

  onClear() {
    this.ingredientForm?.reset();
    this.editMode = false;
  }
}
