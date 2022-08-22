import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Study } from '../study';
import { StudyService } from '../study.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
newCategory:Study = {} as Study;
  study:Study = {} as Study;
  constructor(private studyService:StudyService){}
  toggleAdd:boolean = false;
  id:number | null = 0;

  ngOnInit(){
    this.id = UserService.userId;
  }


  addQuestions(form:NgForm):void{
      let category:string = form.form.value.category;
      let question:string = form.form.value.question;
      let answer:string = form.form.value.answer;
      this.studyService.addQuestion(category,question,answer).subscribe((response:any)=>{
      this.study = response;
      this.newCategory = response;
    //  location.reload(); //BAD PRACTICE FIND BETTER SOLUTION
    });
    this.toggleAdd = !this.toggleAdd
  }

  toggleDisplay():void{
    this.toggleAdd = !this.toggleAdd;
  }
  LogIn(form:NgForm):void{
    let id = form.form.value.id
    UserService.userId = id;
    this.id = id;
  }

  isLoggedIn():boolean{
    return UserService.isLoggedIn();
  }
}
