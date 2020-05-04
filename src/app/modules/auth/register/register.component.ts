import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../shared/services/users/user.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formBuilder();
  }

  ngSubmit() {
    if (this.form.invalid) {
      return;
    }
    if (!this.form.value.terms) {
      Swal.fire(
        'Importante',
        'Debes aceptar los terminos del servicio',
        'warning'
      );
    }
    const user: User = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.userService
      .createUser(user)
      .subscribe((resp) => this.router.navigate(['/auth/login']));
  }

  formBuilder() {
    this.form = this.fb.group(
      {
        name: [null, Validators.compose([Validators.required])],
        email: [
          null,
          Validators.compose([Validators.required, Validators.email])
        ],
        password: [
          null,
          Validators.compose([Validators.required, Validators.minLength(6)])
        ],
        password2: [
          null,
          Validators.compose([Validators.required, Validators.minLength(6)])
        ],
        terms: [false, Validators.compose([Validators.required])]
      },
      { validators: this.differentPassword('password', 'password2') }
    );

    this.form.setValue({
      name: 'Test1',
      email: 'test1@test.com',
      password: '123456',
      password2: '123456',
      terms: true
    });
  }

  private differentPassword(pass1: string, pass2: string) {
    return (group: FormGroup) => {
      const pwd1 = group.controls[pass1].value;
      const pwd2 = group.controls[pass2].value;

      if (pwd1 === pwd2) {
        return null;
      }
      return {
        differentPassword: true
      };
    };
  }
}
