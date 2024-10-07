import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Recipe } from '../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}
