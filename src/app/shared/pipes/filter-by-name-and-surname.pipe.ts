import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByNameAndSurname'
})
export class FilterByNameAndSurnamePipe implements PipeTransform {

  transform(users: any[], searchStr: string): any[] {
    if (searchStr === '') {
      return users;
    } else {
      const searchStrArr = searchStr.split(' ');
      const [ name, surname ] = [ searchStrArr[0], searchStrArr[1] ];

      if (surname === undefined) { // If surname is not entered -> return users by name
        return users.filter(w => w.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
      } else if (searchStrArr.length === 2) {
        const re = new RegExp(`${name.toLowerCase()} ${surname.toLowerCase()}`, 'g');
        return users.filter(w => {
          const fullname = w.name.toLowerCase() + ' ' + w.surname.toLowerCase();
          return fullname.search(re) !== -1;
        });
      } else {
        return users;
      }
    }
  }

}
