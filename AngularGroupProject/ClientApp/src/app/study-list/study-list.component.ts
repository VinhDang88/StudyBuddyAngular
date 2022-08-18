import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Study } from '../study';
import { StudyService } from '../study.service';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent implements OnInit, OnChanges {
@Input() newCategory: Study = {} as Study;
  study:Study[] = [];
  constructor(private http:HttpClient, private studyService:StudyService) { }

  ngOnInit(): void {
    this.studyService.getCategories().subscribe((response:Study[]) => {
      this.study = response;
    })
  }

  ngOnChanges(changes:SimpleChanges):void {
      this.study.push(this.newCategory);
  }
}
