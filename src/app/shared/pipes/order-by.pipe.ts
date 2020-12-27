import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], prop: string, ascOrder: boolean): any[] {
    if (prop === '') {
      return array;
    } else {
      return array.sort((a, b) => {
        if (ascOrder) {
          return b[prop] - a[prop];
        } else {
          return a[prop] - b[prop];
        }
      });
    }
  }

}
