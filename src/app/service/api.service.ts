import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuestionAndAnswerDetail } from '../interface/QuestionAndAnswerDetail';

@Injectable({
  providedIn: 'root'
})
export class StudybuddyService {

  constructor(private client:HttpClient) { }

//Get all questions and answers 
getQAList() : Observable<QuestionAndAnswerDetail[]> {
  let questionList = this.client.get<QuestionAndAnswerDetail[]>(environment.apiUrl + "GetQAList"); 
  return questionList; 
}


//Add question & answer pair to favorites 

//Remove a question & answer pair from favorites 

//User can add a question & answer pair 

}
