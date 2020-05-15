import { Pipe, PipeTransform } from '@angular/core';
import { SERVER_URL } from '../../../config/env';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(value: string, type: string = 'users'): any {
    let endPoint = SERVER_URL + '/images/';

    // validar si value no es undefined
    if (!value) {
      endPoint += `${type}/no-image`;
      return endPoint;
    }

    // validar si inicia con https
    if (value.indexOf('https') >= 0) {
      return value;
    } else {
      // devolver la url completa
      endPoint += `${type}/${value}`;
      return endPoint;
    }
  }
}
