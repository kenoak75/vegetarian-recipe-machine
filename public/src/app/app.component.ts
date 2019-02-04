import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { listenToElementOutputs } from '@angular/core/src/view/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = {};
  recipes = null;
  recipeToDisplay = null;
  recipe = [];
  clicked = false;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    let tempObservable = this._httpService.getRecipes();
    tempObservable.subscribe((data:any)=>{
      this.recipes = data.recipes;
      this.recipeToDisplay = null;
    })
      
    }
    showDetails(recipeIndex){
      this.clicked = true;
      this.recipe=this.recipes[recipeIndex];
      this.recipeToDisplay = this.recipe;
      console.log(this.recipe);
    }

}

