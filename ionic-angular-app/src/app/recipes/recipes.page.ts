import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'http://....',
      ingredients: ['french fries', 'pork', 'salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'http://....',
      ingredients: ['tomatoes', 'sauce', 'meat']
    }
];

  constructor() { }

  ngOnInit() {
  }

}
