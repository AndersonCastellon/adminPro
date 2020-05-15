import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/users/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/auth/login']);
  }
}
