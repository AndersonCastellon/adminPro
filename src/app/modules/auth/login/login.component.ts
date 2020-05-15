import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/services/users/user.service';
import { Credential } from 'src/app/models';
import { Router } from '@angular/router';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  remember = false;
  email: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    init_plugins();
    this.email = this.userService.remember() || '';
    if (this.email.length > 1) {
      this.remember = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const credentials: Credential = {
      email: form.value.email,
      password: form.value.password,
      remember: form.value.remember
    };

    this.userService
      .login(credentials)
      .subscribe(() => (window.location.href = '#/dashboard'));
  }

  loginWithGoogle(gToken: string) {
    this.userService
      .loginWithGoogle(gToken)
      .subscribe(() => (window.location.href = '#/dashboard'));
  }
}
