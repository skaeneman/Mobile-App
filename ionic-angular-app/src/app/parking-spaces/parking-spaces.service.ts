import { Injectable } from '@angular/core';
import { ParkingSpaces } from './parking-spaces.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpacesService {
  // setup some parking spot data
  private _parkingSpaces: ParkingSpaces[] = [
    // uses constructor
    new ParkingSpaces(
      '001',
      'Southie',
      'Close to M Street Beach',
      'http://cbsboston.files.wordpress.com/2013/07/beach.jpg?w=620&h=349&crop=1',
      15.99),
    new ParkingSpaces(
      '002',
      'North End',
      'By the Old North Church',
      'https://c2.staticflickr.com/8/7063/6913528665_3027294c46_z.jpg',
      25.99)
  ];

  // getter function for parking spaces
  get parkingSpaces() {
    return [...this._parkingSpaces];
  }

  constructor() { }
}
