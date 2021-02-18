import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siNo'
})
export class SiNOPipe implements PipeTransform {

  transform(value: Boolean) {
    return value ? 'SI' : 'NO';
  }

}
