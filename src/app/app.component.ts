import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringArray: string[];
  objectArray: Object[];
  complexObjectArray: Object;

  constructor() {
    this.stringArray = ['India', 'Afgan', 'New York'];
    this.objectArray = [
      { name: 'Nisar', mark: 35, city: 'India' },
      { name: 'John', mark: 12, city: 'Afgan' },
      { name: 'Amy', mark: 22, city: 'New York' }
    ];
    this.complexObjectArray = [
      {
        city: 'India',
        people: [
          { name: 'Amy', mark: 12 },
          { name: 'Lisa', mark: 22 }
        ]
      },
      {
        city: 'Afgan',
        people: [
          { name: 'John', mark: 35 },
          { name: 'Mary', mark: 36 }
        ]
      }
    ];
  };
}
