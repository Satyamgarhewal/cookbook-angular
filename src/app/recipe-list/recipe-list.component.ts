import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipeBook/recipeBook.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is a test recipe description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasTZg85P7Ynq37P8jfMv08HfYCIkMu3lK0g&usqp=CAU'
    ),
    new Recipe(
      'A 2nd test Recipe',
      'this is a 2nd test recipe description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasTZg85P7Ynq37P8jfMv08HfYCIkMu3lK0g&usqp=CAU'
    ),
  ];

  constructor() {
    console.log('recipes---------', this.recipes);
  }

  ngOnInit(): void {}
}
