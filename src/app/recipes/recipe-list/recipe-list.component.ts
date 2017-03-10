import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/220px-Wiener-Schnitzel02.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beetroot-feta-grain-salad.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe = new Recipe('Dummy', 'Dummy', 'http://www.digimadmedia.com/static/file-images/photo-images/47062607-Food-Table-Celebration-Delicious-Party-Meal-Concept-Stock-Photo.jpg', []);
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
