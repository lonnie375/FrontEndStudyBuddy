import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QAListComponent } from './component/qalist/qalist.component';
import { GetAnswersComponent } from './component/get-answers/get-answers.component';
import { FavoritesComponent } from './component/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    QAListComponent,
    GetAnswersComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
