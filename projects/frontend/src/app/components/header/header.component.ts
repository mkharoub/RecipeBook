import {Component, OnInit} from '@angular/core';

import {RecipeService} from "../../recipe/recipe.service";

@Component({
  selector: 'fe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

  onFetchRecipes() {
    this.recipeService.fetchRecipes().subscribe();
  }

  onSaveRecipes() {
    this.recipeService.saveRecipes();
  }
}
