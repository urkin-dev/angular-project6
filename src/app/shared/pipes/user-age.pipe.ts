import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAge'
})
export class UserAgePipe implements PipeTransform {

  transform(date: string): number {
    const today = new Date();
    const todayYear  = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay   = today.getDate();

    const birthdate: any[] = date.split('/');

    let age = todayYear - birthdate[2];

    if (todayMonth < (birthdate[0] - 1)) {
      age--;
    }

    if (((birthdate[1] - 1) === todayMonth) && (todayDay < birthdate[1])) {
      age --;
    }

    return age;
  }

}
