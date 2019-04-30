import { Injectable } from '@angular/core';
import { ParkingSpaces } from './parking-spaces.model';
import { AuthenticationService } from '../authentication/authentication.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';
import { ParkingSpaceLocation } from './parking-spaces-location.model';

@Injectable({
  providedIn: 'root'
})

export class ParkingSpacesService {

  // setup some parking spot data
  private pSpaces = new BehaviorSubject<ParkingSpaces[]>([
        // uses constructor
        new ParkingSpaces(
          '001',
          'userId2',
          'Southie Parking',
          'Close to the beach.',
          'assets/images/southie.jpeg',
          35.95,
          new Date(),
          new Date(),
          {
            address: '117 M Street, Boston, MA, 02127',
            mapImageUrl: null,
            lat: 42.350552,
            lng: -71.105404
          }),
        new ParkingSpaces(
          '002',
          'userId2',
          'North End Parking',
          'By the Old North Church',
          'assets/images/northEnd.jpeg',
          25.99,
          new Date(),
          new Date(),
          {
            address: '157 Richmond Street, Boston, MA, 02113',
            mapImageUrl: null,
            lat: 42.350552,
            lng: -71.105404
          }),
        new ParkingSpaces(
          '003',
          'userId3',
          'Brookline Parking',
          'In the heart of Coolidge Corner',
          'assets/images/brookline.jpeg',
          34.99,
          new Date(),
          new Date(),
          {
            address: '1317 Beacon St, Brookline, MA 02446',
            mapImageUrl: null,
            lat: 42.350552,
            lng: -71.105404
          }),
        new ParkingSpaces(
          '004',
          'userId4',
          'Boston University Parking',
          'Walking distance to Boston University',
          'assets/images/BU.jpeg',
          23.95,
          new Date(),
          new Date(),
          {
            address: '1010 Commonwealth Avenue, Boston, MA 02215',
            mapImageUrl: null,
            lat: 42.350552,
            lng: -71.105404
          })
    ]
  );

  constructor(private authenticationService: AuthenticationService) { }

  // getter function for all parking spaces
  get parkingSpaces() {
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
                  dateFrom: Date, dateTo: Date, location: ParkingSpaceLocation) {
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
                                              dateTo,
                                              location
  );
    // save the new parking space and make sure the list is updated
    return this.pSpaces.pipe(take(1), delay(1000), tap(spaces => {
        this.pSpaces.next(spaces.concat(newParkingSpace));
      })
    );
  }
}
