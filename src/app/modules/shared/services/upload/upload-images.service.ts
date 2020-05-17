import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/app/config/env';

@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {
  constructor(private http: HttpClient) {}

  uploadImg(file: File, id: string, collection: string, token: string) {
    const endPoint = SERVER_URL + `/upload/photo/${collection}/${id}`;

    const formDate = new FormData();
    formDate.append('photo', file, file.name);

    return this.http.put(endPoint, formDate, {
      headers: { Authorization: token }
    });
  }
}
