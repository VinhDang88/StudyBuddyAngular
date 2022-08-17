import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  endpoint:string = "api/Favorite"
  constructor(private http:HttpClient, @Inject("BASE_URL") private baseUrl:string ) { }

//Need to add a getAll method to be able to retrieve a list to add to favorites

  addFavorite(study_id:number):any{
    this.http.post(this.baseUrl+this.endpoint+`/addFavorite?study_id=${study_id}`, {})

  }
  deleteFavorite(id:number):any{
    this.http.delete(this.baseUrl+this.endpoint+`/deleteFavorite?id=${id}`)
  }
}
