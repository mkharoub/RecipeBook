import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipeComponent} from "./recipe.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

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
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailsComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
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
