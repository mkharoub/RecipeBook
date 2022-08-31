import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {retry, Subscription} from "rxjs";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

import {RecipeService} from "../recipe.service";

@Component({
  selector: 'fe-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  paramsSub$: Subscription | undefined;
  selectedRecipeId: number | undefined;
  recipeForm: FormGroup | undefined;
  editMode: boolean | undefined;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit(): void {
    this.paramsSub$ = this.route.params.subscribe(params => {
      this.selectedRecipeId = +params['id'];
      this.editMode = !isNaN(this.selectedRecipeId);
      this.initForm();
    });
  }

  ngOnDestroy() {
    this.paramsSub$?.unsubscribe();
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeForm?.value, this.selectedRecipeId as any);
    } else {
      this.recipeService.addRecipe(this.recipeForm?.value);
    }

    this.recipeForm?.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel() {
    this.recipeForm?.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm?.get('ingredients')).push(new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'amount': new FormControl('', [Validators.required, Validators.min(1)]),
    }));
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm?.get('ingredients')).removeAt(index);
  }

  get ingredientControls() {
    return (<FormArray>this.recipeForm?.get('ingredients')).controls;
  }

  private initForm() {
    let name = '';
    let description = '';
    let imagePath = '';
    let ingredients = new FormArray<any>([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.selectedRecipeId as any);

      name = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;
      recipe.ingredients.forEach((ingredient: any) => {
        ingredients.push(new FormGroup({
          'name': new FormControl(ingredient.name, [Validators.required]),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.min(1)])
        }));
      });
    }

    this.recipeForm = new FormGroup<any>({
      'name': new FormControl(name, [Validators.required]),
      'description': new FormControl(description, [Validators.required]),
      'imagePath': new FormControl(imagePath, [Validators.required]),
      'ingredients': ingredients,
    });

    console.log(this.recipeForm)
  }
}
