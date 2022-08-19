import { Component, OnInit } from '@angular/core';
import { Favorite } from '../favorite';
import { FavoriteService } from '../favorite.service';
import { Study } from '../study';
import { StudyService } from '../study.service';
import { UserService } from '../user.service';

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
  favorite:Favorite = {} as Favorite;

  ngOnInit(): void {
    this.studyService.getQuestions().subscribe((response: Study[]) => {
      this.study = response;
      this.getFavorites();
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

  deleteFavorite(index:number):any{

    this.favoriteService.deleteFavorite(index).subscribe((response:Favorite) =>{
      let i = this.favorites.findIndex(f => f.id == index)
      this.favorites.splice(i,1)
      // this.getFavorites();
    });
  }

  getFavorites():void{

    this.favoriteService.getFavorite().subscribe((response: Favorite[]) => {
      response.forEach((r:Favorite)=>{
        if(r.userId == UserService.userId)
        {
          this.favorites.push(r)
        }

      })
      // this.favorites = response;
      console.log(this.favorites);
    });
  }
  

}
