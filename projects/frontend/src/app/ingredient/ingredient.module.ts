import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IngredientRoutingModule} from './ingredient-routing.module';
import {IngredientComponent} from "./ingredient.component";
import {IngredientEditComponent} from "./ingredient-edit/ingredient-edit.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    IngredientComponent,
    IngredientEditComponent
  ],
  imports: [
    CommonModule,
    IngredientRoutingModule,
    FormsModule
  ]
})
export class IngredientModule {
}
