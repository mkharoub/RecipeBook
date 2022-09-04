import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeResolver implements Resolve<Recipe[]> {
  constructor(private recipeService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length) return of(recipes);

    return this.recipeService.fetchRecipes();
  }
}
