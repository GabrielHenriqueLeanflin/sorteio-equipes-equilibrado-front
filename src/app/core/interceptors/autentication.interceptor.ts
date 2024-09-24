import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private usersService: UsersService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.usersService.getToken();
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('token', token)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
