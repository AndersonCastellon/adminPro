import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { UserService } from '../../shared/services/users/user.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  user: User;
  file: File;
  tempFile: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  updateUser(form: NgForm) {
    if (form.invalid || form.pristine) {
      return;
    }

    const user: User = {
      name: form.value.name,
      email: form.value.email,
      role: this.user.role
    };
    this.userService.updateUser(user).subscribe(() => {});
  }

  onFileChange(file: File) {
    if (!file) {
      this.file = null;
      return;
    }

    if (file.type.indexOf('image') < 0) {
      Swal.fire(
        'Archivo inválido',
        'Sólo las imágenes son permitidas',
        'error'
      );
      return;
    }

    this.file = file;

    const render = new FileReader();
    const tempUri = render.readAsDataURL(file);
    render.onloadend = () => (this.tempFile = render.result as string);
  }

  uploadImg() {
    this.userService.uploadImageUser(this.file);
    this.file = null;
  }
}
