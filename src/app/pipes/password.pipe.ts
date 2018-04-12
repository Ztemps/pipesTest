import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, args?: boolean): any {
    return args ? '*'.repeat(value.length) : value;
  }

}
