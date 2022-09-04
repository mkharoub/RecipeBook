import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject, tap} from "rxjs";

import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  endPoint = 'https://recipebook-23f1d-default-rtdb.firebaseio.com';
  recipesChangedSub: Subject<Recipe[]> = new Subject();
  fetchingRecipesSub: BehaviorSubject<boolean> = new BehaviorSubject(false);
  recipes: Recipe[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id]
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChangedSub.next(this.getRecipes());
  }

  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipesChangedSub.next(this.getRecipes());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChangedSub.next(this.getRecipes());
  }

  fetchRecipes() {
    this.fetchingRecipesSub.next(true);

    return this.httpClient.get<Recipe[]>(`${this.endPoint}/recipes.json`).pipe(tap(recipes => {
      this.recipes = recipes;
      this.recipesChangedSub.next(this.getRecipes());
      this.fetchingRecipesSub.next(false);
    }));
  }

  saveRecipes() {
    this.fetchingRecipesSub.next(true);
    this.httpClient
      .put(`${this.endPoint}/recipes.json`, this.getRecipes())
      .subscribe(() => {
        this.fetchingRecipesSub.next(false);
      });
  }
}
