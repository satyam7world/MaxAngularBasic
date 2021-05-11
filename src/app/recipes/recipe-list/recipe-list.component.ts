import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Name Test', 'Simple Discription', 'https://www.foodista.com/sites/default/files/styles/featured/public/field/image/Crab-Salad-6.jpg'),
    new Recipe('Name Test', 'Simple Discription', 'https://www.foodista.com/sites/default/files/styles/featured/public/field/image/Crab-Salad-6.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
