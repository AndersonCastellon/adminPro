import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(): boolean {
    const canAct = this.userService.isLogged();
    if (!canAct) {
      this.router.navigate(['/auth/login']);
    }
    return canAct;
  }
}
