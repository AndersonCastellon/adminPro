import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/auth/login']);
  }
}
