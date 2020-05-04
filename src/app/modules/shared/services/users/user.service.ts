import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { SERVER_URL } from 'src/app/config/env';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

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
}
