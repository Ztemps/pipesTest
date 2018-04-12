import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Lory Money';
  name2 = 'lory money sANTa cLAuS';
  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salary = 1234.5;
  hero = {
    name: 'Logan',
    clave: 'Wolverine',
    age: 999,
    address: {
      street: 'First',
      house: '19'
    }
  };

  date = new Date();

  promiseValue = new Promise( (res, rej) => {
    setTimeout(() => res('Data loaded'), 3500);
  });

  video = 'LXODxOwgWEc';
  pwd = 'Tostadica';
  activate = true;
}
