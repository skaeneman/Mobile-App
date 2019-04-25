import { Injectable } from '@angular/core';
import { ParkingSpaces } from './parking-spaces.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class ParkingSpacesService {

  // setup some parking spot data
  private pSpaces: ParkingSpaces[] = [
    // uses constructor
    new ParkingSpaces(
      '001',
      'userId1',
      'Southie',
      'Close to M Street Beach',
      'http://cbsboston.files.wordpress.com/2013/07/beach.jpg?w=620&h=349&crop=1',
      35.95,
      new Date(),
      new Date()),
    new ParkingSpaces(
      '002',
      'userId2',
      'North End',
      'By the Old North Church',
      'https://c2.staticflickr.com/8/7063/6913528665_3027294c46_z.jpg',
      25.99,
      new Date(),
      new Date()),
    new ParkingSpaces(
      '003',
      'userId3',
      'Brookline',
      'In the heart of Coolidge Corner',
      'http://farm3.staticflickr.com/2773/5796800367_fd0acf39b0_z.jpg',
      34.99,
      new Date(),
      new Date()),
    new ParkingSpaces(
      '004',
      'userId4',
      'Boston',
      'Walking distance to Boston University',
      'https://s-media-cache-ak0.pinimg.com/736x/73/41/2a/73412abc1a78de99598bb75762c53882--boston-university-charles-river.jpg',
      23.95,
      new Date(),
      new Date())
];

  constructor(private auth: AuthenticationService) { }

  // getter function for all parking spaces
  get parkingSpaces() {
    return this.pSpaces;
  }

  // lookup one parking space
  findParkingSpace(id: string) {
    return { ...this.pSpaces.find(space => space.id === id) };
  }

  // create a new parking space
  addParkingSpace(title: string,
                  description: string,
                  url: string,
                  price: number,
                  dateFrom: Date,
                  dateTo: Date) {
    // generate random id
    const id = Math.random().toString();
    // new parking spot
    const newParkingSpace = new ParkingSpaces(id,
                                              userId,
                                              title,
                                              description,
                                              url,
                                              price, 
                                              dateFrom, 
                                              dateTo);
  }
  
}
