import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<User> {
    return this.http.get<User>(`${this.url}/users`).pipe(
      res => res,
      error => error
    )
  }

  autenticar(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.url}/users/`, { email, senha })
  }


}
