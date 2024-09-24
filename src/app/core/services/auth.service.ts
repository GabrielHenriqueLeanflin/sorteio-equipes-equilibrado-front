import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  createUser(variables: {name:string, email:string, password:string, confirm_password:string} ):Observable<any> {
    return this.http.post(`${environment.api}/api/cadastro`, variables);
  }

  login(variables: {email:string, password:string} ):Observable<any> {
    return this.http.post(`${environment.api}/api/login`, variables);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
