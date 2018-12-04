import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  ricetta: Recipe = new Recipe('Patate',
    'lorem ipsum',
    'https://www.lalampadina.net/magazine/wp-content/uploads/2016/02/cibi-spazzatura.jpg');
  ricetta2: Recipe = new Recipe('Tate',
    'orem ipsum',
    'https://www.lalampadina.net/magazine/wp-content/uploads/2016/02/cibi-spazzatura.jpg');
  ricetta3: Recipe = new Recipe('dhsfbv<hab',
    'rem ipsum',
    'https://www.lalampadina.net/magazine/wp-content/uploads/2016/02/cibi-spazzatura.jpg');
  recipes: Recipe[] = [
    this.ricetta,
    this.ricetta2,
    this.ricetta3
  ];
  ingredients = {
    nome: 'Aglio',
    peso: '5g'
  };
  constructor() { }

  ngOnInit() {
  }

}
