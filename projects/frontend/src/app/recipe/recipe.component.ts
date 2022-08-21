import {Component, OnInit} from '@angular/core';

import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'fe-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] | undefined;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
