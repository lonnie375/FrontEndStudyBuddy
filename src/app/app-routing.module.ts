import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QAListComponent } from './component/qalist/qalist.component';
import { GetAnswersComponent } from './component/get-answers/get-answers.component';

const routes: Routes = [
  { path: "listQuestions", component: QAListComponent}, 
  { path: "getAnswers/:id", component: GetAnswersComponent}, 
  { path: '', redirectTo: 'listQuestions', pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
