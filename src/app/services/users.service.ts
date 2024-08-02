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

  public usersList() {
    return this.http.get(`${this.url}/users`).pipe(
      res => res,
      error => error
    )
  }
}
