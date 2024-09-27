import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './core/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const usersService = inject(AuthService);
  const router = inject(Router);

  if (state.url === '/') {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem("user");
    return true
  }

  if (usersService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
