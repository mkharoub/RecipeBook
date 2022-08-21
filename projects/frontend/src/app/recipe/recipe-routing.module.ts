import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipeComponent} from "./recipe.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: ':id',
        component: RecipeDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {
}
