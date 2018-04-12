import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    value = value.toLowerCase();

    // tslint:disable-next-line:prefer-const
    let names = value.split(' ');

    if (all) {
      // tslint:disable-next-line:forin
      for (const i in names) {
        names[i] = names[i][0].toUpperCase() + names[i].substr(1);
      }
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1);
    }

    return names.join(' ');
  }
}
