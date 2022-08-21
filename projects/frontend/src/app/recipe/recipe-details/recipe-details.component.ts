import {Component, OnDestroy, OnInit} from '@angular/core';

import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'fe-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe | undefined;
  paramsSub$: Subscription | undefined;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramsSub$ = this.route.params.subscribe(params => {
      this.recipe = this.recipeService.getRecipe(+params['id'])
    });
  }

  ngOnDestroy() {
    this.paramsSub$?.unsubscribe();
  }
}
