import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) { }

  createUser(variables: {name:string, email:string, password:string, confirm_password:string} ):Observable<any> {
    return this.http.post(`${environment.api_host}/api/cadastro`, variables);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${environment.api_host}/api/usuarios`, { observe: 'response' });
  }
}
