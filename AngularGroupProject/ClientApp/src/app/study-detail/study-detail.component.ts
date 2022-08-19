import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favorite } from '../favorite';
import { FavoriteService } from '../favorite.service';
import { Study } from '../study';
import { StudyService } from '../study.service';

@Component({
  selector: 'app-study-detail',
  templateUrl: './study-detail.component.html',
  styleUrls: ['./study-detail.component.css']
})
export class StudyDetailComponent implements OnInit {
 
  count: number = 0;
  studyCategory: Study[] = [];
  toggle:boolean = true;
  toggleArr:boolean[] = [];
  favorite:Favorite = {} as Favorite;
  newStudyList:Study[] = [];
  
@Input() favorites:Favorite[] = [];

  constructor(private route:ActivatedRoute, private studyService:StudyService, private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    let category: string = String(params.get("category"));

    this.studyService.getCategory(category).subscribe((response: Study[]) => {
      this.studyCategory = response;
      for(let i=0; i < this.studyCategory.length; i++){
        this.toggleArr.push(false);
      }
      console.log(this.toggleArr);
    })

    this.studyService.getQuestions().subscribe((response:Study[]) =>
    {
        this.newStudyList = response;
    });
  }

 
  nextquestion():void { 
    if(this.studyCategory.length > this.count){
      this.count++;
      this.toggle = true;
      if(this.count == this.studyCategory.length){
        this.count--;
      }
    }
    
  };
  previousquestion():void { 
    if(this.count > 0){
      this.count--;
      this.toggle = true;
    }
    
  };

  toggleAnswer():void{
    this.toggle = !this.toggle;
  }
  toggleAnswerArray(i:number):void{
    this.toggleArr[i] = !this.toggleArr[i];
  }

  addFavorite(id:number):any {    
    
    return this.favoriteService.addFavorite(id).subscribe((response:Favorite) =>
    {
        this.favorite = response;
        console.log(this.favorite);
        this.favorites.splice(id,1);
        console.log(this.favorites);
    });    
    
  }

  selectFavorite(question:string, answer:string, category:string):number {

    let index:number = 0;
    this.newStudyList.forEach((s:Study) =>
    {
        if(s.question == question && s.answer == answer && s.category == category)
        {
           index = this.newStudyList.indexOf(s) + 1;
        }
    });
    return index;
  }

  
}
