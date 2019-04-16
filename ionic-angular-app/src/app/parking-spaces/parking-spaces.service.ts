import { Injectable } from '@angular/core';
import { ParkingSpaces } from './parking-spaces.model';

@Injectable({
  providedIn: 'root'
})

export class ParkingSpacesService {

  // setup some parking spot data
  private pSpaces: ParkingSpaces[] = [
    // uses constructor
    new ParkingSpaces(
      '001',
      'Southie',
      'Close to M Street Beach',
      'http://cbsboston.files.wordpress.com/2013/07/beach.jpg?w=620&h=349&crop=1',
      35.95),
    new ParkingSpaces(
      '002',
      'North End',
      'By the Old North Church',
      'https://c2.staticflickr.com/8/7063/6913528665_3027294c46_z.jpg',
      25.99),
    new ParkingSpaces(
      '003',
      'Brookline',
      'In the heart of Coolidge Corner',
      'http://farm3.staticflickr.com/2773/5796800367_fd0acf39b0_z.jpg',
      34.99),
    new ParkingSpaces(
      '004',
      'Boston',
      'Walking distance to Boston University',
      'https://s-media-cache-ak0.pinimg.com/736x/73/41/2a/73412abc1a78de99598bb75762c53882--boston-university-charles-river.jpg',
      23.95)
];

  // getter function for parking spaces
  get parkingSpaces() {
    return this.pSpaces;
  }

  constructor() { }
}
