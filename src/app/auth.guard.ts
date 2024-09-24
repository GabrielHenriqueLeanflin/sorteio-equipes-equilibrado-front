import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './core/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const usersService = inject(AuthService);
  const router = inject(Router);

  if (usersService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
