import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'fe-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipes: Recipe[] | undefined;
  recipesChangedSub$: Subscription | undefined;
  fetchingRecipesSub$: Subscription | undefined;
  loading = false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    this.fetchingRecipesSub$ = this.recipeService.fetchingRecipesSub.subscribe(isFetching => {
      this.loading = isFetching;
    });

    this.recipesChangedSub$ = this.recipeService.recipesChangedSub.subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy() {
    this.recipesChangedSub$?.unsubscribe();
    this.fetchingRecipesSub$?.unsubscribe();
  }
}
