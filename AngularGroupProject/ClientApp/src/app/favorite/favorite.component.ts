import { Component, OnInit } from '@angular/core';
import { Favorite } from '../favorite';
import { FavoriteService } from '../favorite.service';
import { Study } from '../study';
import { StudyService } from '../study.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private favoriteService: FavoriteService, private studyService: StudyService) { }

  favorites: Favorite[] = [];
  study: Study[] = [];
  favoriteStudies: Study[] = [];

  ngOnInit(): void {
    this.favoriteService.getFavorite().subscribe((response: Favorite[]) => {
      this.favorites = response;
      console.log(this.favorites);
    });
    this.studyService.getQuestions().subscribe((response: Study[]) => {
      this.study = response;
      console.log(this.study);
    });

  }

  getFavoriteList(): Study[]{
    this.favoriteStudies = this.study.filter((s:Study) => {
     return this.favorites.map(f => f.studyId).includes(s.id);
    });
    return this.favoriteStudies;

    // let result: Study[] = [];
    // this.study.forEach((s:Study) => {
    //   this.favorites.forEach((f:Favorite) => {
    //     if(Number(f.studyId) == Number(s.id)){
    //       result.push(s);
    //     }
    //   });
    // });
    // console.log(result);
    // return result;
  }

}
