import {Component, OnDestroy, OnInit} from '@angular/core';

import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {IngredientService} from "../../ingredient/ingredient.service";

@Component({
  selector: 'fe-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe | undefined;
  paramsSub$: Subscription | undefined;
  selectedRecipeId: number | undefined;
  fetchingRecipesSub$: Subscription | undefined;
  loading = false;

  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.paramsSub$ = this.route.params.subscribe(params => {
      this.selectedRecipeId = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.selectedRecipeId);
    });

    this.fetchingRecipesSub$ = this.recipeService.fetchingRecipesSub.subscribe(isFetching => {
      this.loading = isFetching;
    });
  }

  ngOnDestroy() {
    this.paramsSub$?.unsubscribe();
    this.fetchingRecipesSub$?.unsubscribe();
  }

  onAddToShoppingList() {
    this.ingredientService.addIngredients(this.recipe?.ingredients as any);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipeId as any);
    this.router.navigate(['/recipe']);
  }
}
