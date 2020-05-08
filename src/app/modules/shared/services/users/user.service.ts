import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/app/config/env';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { User, Credential } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(credentials: Credential) {
    if (credentials.remember) {
      localStorage.setItem('email', credentials.email);
    } else {
      localStorage.removeItem('email');
    }

    const endPoint = `${SERVER_URL}/login`;
    return this.http.post(endPoint, credentials).pipe(
      map((resp: any) => {
        this.saveUserIntoStorage(resp);
        return true;
      })
    );
  }

  loginWithGoogle(gToken: string) {
    const endPoint = `${SERVER_URL}/login/google`;
    return this.http.post(endPoint, { gToken }).pipe(
      map((resp: any) => {
        this.saveUserIntoStorage(resp);
        return true;
      })
    );
  }

  createUser(user: User) {
    const endPoint = `${SERVER_URL}/users`;
    return this.http.post(endPoint, user).pipe(
      map((resp: any) => {
        Swal.fire(
          'Hecho',
          `Usuario ${resp.user.email} creado correctamente`,
          'success'
        );
        return resp.user;
      })
    );
  }

  remember() {
    return localStorage.getItem('email');
  }

  private saveUserIntoStorage(resp: any) {
    localStorage.id = resp.id;
    localStorage.token = resp.token;
    localStorage.setItem('user', JSON.stringify(resp.user));
  }
}
