import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private route:ActivatedRoute, private studyService:StudyService,) { }

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
}
