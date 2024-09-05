import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) { }

  createUser(email:string, senha:string):Observable<any> {
    return this.http.post(`${environment.api_host}/cadastro`, {email, senha});
  }

  getUsers(): Observable<any> {
    return this.http.get(`${environment.api_host}/usuarios`, { observe: 'response' });
  }
}
