import { Injectable } from '@angular/core';
import { ParkingSpaces } from './parking-spaces.model';
import { AuthenticationService } from '../authentication/authentication.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ParkingSpacesService {

  // setup some parking spot data
  private pSpaces = new BehaviorSubject<ParkingSpaces[]>([
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
    ]
  );

  constructor(private authenticationService: AuthenticationService) { }

  // getter function for all parking spaces
  get parkingSpaces() {
    console.log('getting parking spaces...');
    return this.pSpaces.asObservable();
  }

  // lookup one parking space
  findParkingSpace(id: string) {
    return this.pSpaces.pipe(take(1), map(spots => {
        return { ...spots.find(spot => spot.id === id) };
      })
    );
  }

  // create a new parking space
  addParkingSpace(title: string, description: string, price: number,
                  dateFrom: Date, dateTo: Date) {
    // generate random id
    const id = Math.random().toString();
    // new parking spot
    const newParkingSpace = new ParkingSpaces(id,
                                              this.authenticationService.userId,
                                              title,
                                              description,
                                              'https://econlife.com/wp-content/uploads/2014/12/open-parking-space.jpg',
                                              price,
                                              dateFrom,
                                              dateTo
  );
    // save the new parking space and make sure the list is updated
    return this.pSpaces.pipe(take(1), delay(1000), tap(spaces => {
        this.pSpaces.next(spaces.concat(newParkingSpace));
      })
    );
  }
}
