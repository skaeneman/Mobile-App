import { Injectable } from '@angular/core';
import { Reservation } from './reservations.model';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  get reservations(): Reservation[] {
    return this._reservations.getValue();
}

 set reservations(val: Reservation[]) {
 this._reservations.next(val);
}

private _reservations = new BehaviorSubject<Reservation[]>([]);

constructor(private authentication: AuthenticationService) { }

// return the parking space reservations
get reservations$() {
return this._reservations.asObservable();
}

// create a reservation
addReservation(
  parkingSpaceId: string,
  parkingSpaceTitle: string,
  url: string,
  firstName: string,
  lastName: string,
  reservedDayCount: number,
  reservedFrom: Date,
  reservedTo: Date
  ) {
  const newReservation = new Reservation(
    Math.random().toString(),
    parkingSpaceId,
    this.authentication.userId,
    parkingSpaceTitle,
    url,
    firstName,
    lastName,
    reservedDayCount,
    reservedFrom,
    reservedTo
  );
  this.reservations = [
    ...this.reservations,
    newReservation
  ];
}

  // remove a reservation
  deleteReservation() {
  }

}
