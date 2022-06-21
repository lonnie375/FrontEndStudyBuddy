import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAndAnswerDetail } from 'src/app/interface/QuestionAndAnswerDetail';
import { StudybuddyService } from 'src/app/service/api.service';

@Component({
  selector: 'app-get-answers',
  templateUrl: './get-answers.component.html',
  styleUrls: ['./get-answers.component.css']
})
export class GetAnswersComponent implements OnInit {

  //Inject the activation of the route 
  //ApiService injected as well so that we can get the information by their id.
  constructor(private route: ActivatedRoute, private service: StudybuddyService) { }

  answer: QuestionAndAnswerDetail | undefined; 
  id: number = 0; 

  ngOnInit(): void {
    //this.route.params.subscribe(params => this.getAnswersById(params['id'])); 

  }
  /*
  //the redline under subscribe should go away after we fill in the getAnswersById in the service once it's added 
  //in Visual Studio by my team ]
  
   getAnswersById(id: number){
    this.service.getAnswerById(id).subscribe((data:QuestionAndAnswerDetail) => this.answer = data);
   }
  */

}
