import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FavoriteService } from '../favorite.service';
import { Study } from '../study';
import { StudyService } from '../study.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  study:Study = {} as Study;
  constructor(private studyService:StudyService, private favoriteService: FavoriteService){}
  toggleAdd:boolean = false;

  addQuestions(form:NgForm):void{
      let category:string = form.form.value.category;
      let question:string = form.form.value.question;
      let answer:string = form.form.value.answer;
      this.studyService.addQuestion(category,question,answer).subscribe((response:any)=>{
      this.study = response;
     location.reload(); //BAD PRACTICE FIND BETTER SOLUTION
    });
    this.toggleAdd = !this.toggleAdd
  }

  toggleDisplay():void{
    this.toggleAdd = !this.toggleAdd;
  }
}
