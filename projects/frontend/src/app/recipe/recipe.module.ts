import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipeRoutingModule} from './recipe-routing.module';
import {RecipeComponent} from "./recipe.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {DirectivesModule} from "directives";

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    DirectivesModule
  ]
})
export class RecipeModule {
}
