import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from './user';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http :Http) { }
  showUsers() : Observable<User[]> {
    return this._http.get("https://jsonplaceholder.typicode.com/users").
    map((res:Response)=>res.json())
  }


}