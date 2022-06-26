import { Component, OnInit } from '@angular/core';
import { FavoriteQA } from 'src/app/interface/favorite-qa';
import { StudybuddyService } from 'src/app/service/api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private service: StudybuddyService ) { }

  //Create an Array to hold the list of favorite questions/answers 
  favoriteList: FavoriteQA[] = [];



  ngOnInit(): void {
   this.postFavoriteQA(userFav);
  }


 
postFavoriteQA(userId:number){
   this.postFavoriteQA(userId).subscribe((data: FavoriteQA[]) => this.favoriteList = data);

}


}
