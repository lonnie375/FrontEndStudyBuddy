import { Component, OnInit } from '@angular/core';
import { FavoriteQA } from 'src/app/interface/favorite-qa';
import { QuestionAndAnswerDetail } from 'src/app/interface/QuestionAndAnswerDetail';
import { StudybuddyService} from 'src/app/service/api.service'; 
import { FavoritesComponent } from '../favorites/favorites.component';


@Component({
  selector: 'app-qalist',
  templateUrl: './qalist.component.html',
  styleUrls: ['./qalist.component.css']
})
export class QAListComponent implements OnInit {

  constructor(private service: StudybuddyService) { }

  //Create an Array to hold the list of questions/answers
  questionAList: QuestionAndAnswerDetail[] = []; 

  

  //This is going to run once the component runs
  ngOnInit(): void {
    this.getQAList();
  
  }

  //Reaching out to service and getting all of the questions and answers
  //Passing that information into a array 
getQAList(){
  this.service.getQAList().subscribe((data:QuestionAndAnswerDetail[]) => this.questionAList = data);
}


addToFavorites(id: number){
  this.service.postFavoriteQA({userId: 1, qAId: id, isActive: true});
}

}
