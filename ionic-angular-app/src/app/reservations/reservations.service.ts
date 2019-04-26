import { Injectable } from '@angular/core';
import { Reservation } from './reservations.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor() { }

  private _reservations: Reservation[] = [
    {
        id: '1',
        userId: 'userId7',
        parkingSpaceId: 'sp1',
        parkingSpaceTitle: 'Southie parking space',
        reservationLength: 3,
    }
  ];

  // return the parking space reservations
  get reservations() {
    return [...this._reservations];
  }

}
