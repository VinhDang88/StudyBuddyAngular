import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  // userid:number = 0;
  endpoint:string = "api/Favorite"
  constructor(private http:HttpClient, @Inject("BASE_URL") private baseUrl:string ) { }

//Need to add a getAll method to be able to retrieve a list to add to favorites

  addFavorite(study_id:number):any{
    let userid = UserService.userId!;
    return this.http.post(this.baseUrl+this.endpoint+`/addFavorite?study_id=${study_id}&userId=${userid}`, {})

  }
  deleteFavorite(id:number):any{
    let userid = UserService.userId!;
    return this.http.delete(this.baseUrl+this.endpoint+`/deleteFavorite?id=${id}&userId=${userid}`)
  }

  getFavorite():any{
    return this.http.get(`${this.baseUrl}${this.endpoint}/getFavorite`);
  }

}
