import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Study } from '../study';
import { StudyService } from '../study.service';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent implements OnInit {

  study:Study[] = [];
  constructor(private http:HttpClient, private studyService:StudyService) { }

  ngOnInit(): void {
    this.studyService.getCategories().subscribe((response:Study[]) => {
      this.study = response;
    })
  }

}
