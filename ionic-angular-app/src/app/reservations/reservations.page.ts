import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReservationsService } from './reservations.service';
import { Reservation } from './reservations.model';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit, OnDestroy {
userReservations: Reservation[];
private resSubscription: Subscription;

  constructor(private resService: ReservationsService) { }

  ngOnInit() {
    // get the reservations
    this.resSubscription =
      this.resService.reservations$.subscribe(reservations => {
        console.log('reservations...', reservations);
        this.userReservations = reservations;
      });
  }

  ngOnDestroy() {
    this.resSubscription.unsubscribe();
  }

}
