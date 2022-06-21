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

//Get all questions 
getQAList() : Observable<QuestionAndAnswerDetail[]> {
  let questionList = this.client.get<QuestionAndAnswerDetail[]>(environment.apiUrl + "GetQAList"); 
  return questionList; 
}

//Get the answer for the question 
//We need to get the remaining apiURL information in order to get this information. 
getAnswerById(id: number){
  let answer = this.client.get<QuestionAndAnswerDetail>(environment.apiUrl + "####" + id); 
} 

//Mark your favorite question/answer pair 
postFavoriteQA(id: number){
  let result = this.client.post(environment.apiUrl + "###", id); 
}

//View your favorite question/answers

//Remove a question & Answer from their list of favorites 

//User can add a question and Answer 

}
