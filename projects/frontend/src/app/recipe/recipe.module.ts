import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {DirectivesModule} from "directives";
import {UiModule} from "ui";

import {RecipeRoutingModule} from './recipe-routing.module';
import {RecipeComponent} from "./recipe.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeResolver} from "./recipe.resolver";

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
    ReactiveFormsModule,
    DirectivesModule,
    UiModule
  ],
  providers: [RecipeResolver]
})
export class RecipeModule {
}
