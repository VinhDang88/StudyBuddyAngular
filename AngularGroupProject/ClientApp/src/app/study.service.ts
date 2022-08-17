import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  endpoint:string = "api/Study"
  constructor(private http:HttpClient, @Inject("BASE_URL") private baseUrl:string ) { }

  getQuestions():any{
    return this.http.get(this.baseUrl+this.endpoint +"/getAll")
  }

  addQuestion(category:string, question:string, answer:string):any{
    this.http.post(this.baseUrl+this.endpoint+`/addQuestion?category=${category}&question=${question}&=answer${answer}`, {})

  }
}
