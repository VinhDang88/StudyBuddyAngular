import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public static userId:number | null = null
  constructor() { }

  public static isLoggedIn():boolean{
    if(this.userId == null){
      return false;
    }
    else
    {
      return true;
    }
  }
}
