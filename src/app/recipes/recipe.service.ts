import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Schnitzel',
            'This is simply a schnitzel with fries',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Schnitzel', 1),
                new Ingredient('French Fries', 20),
                new Ingredient('Lemon Slice', 1)
            ]),
        new Recipe('A big fat Burger',
            'This is simply a burger',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('MeatPatty', 1),
                new Ingredient('Buns', 1),
                new Ingredient('Cheese', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {
        
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}