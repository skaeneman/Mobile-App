import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ReservationsService } from '../../../reservations/reservations.service';
import { ActivatedRoute } from '@angular/router';
import { ParkingSpacesService } from '../../parking-spaces.service';
import { ParkingSpaces } from '../../parking-spaces.model';
import { MakeReservationComponent } from '../../../reservations/make-reservation/make-reservation.component';

@Component({
  selector: 'app-space-info',
  templateUrl: './space-info.page.html',
  styleUrls: ['./space-info.page.scss'],
})
export class SpaceInfoPage implements OnInit, OnDestroy {
  parkingSpace: ParkingSpaces;
  private parkingSpacesSubscription: Subscription;

  constructor(
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private parkingSpacesService: ParkingSpacesService,
    private modalController: ModalController,
    private reservationService: ReservationsService
  ) { }

  ngOnInit() {
    // setup navigation
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // if there is no parkingSpaceId
      if (!paramMap.has('parkingSpaceId')) {
        this.navController.navigateBack('/parking-spaces/tabs/find');
        return;
      }
      // finds parking spot by id
      this.parkingSpacesSubscription =
        this.parkingSpacesService.findParkingSpace(paramMap.get('parkingSpaceId')).subscribe(spot => {
        this.parkingSpace = spot;
      });
    });
  }

  ngOnDestroy() {
    if (this.parkingSpacesSubscription) {
      this.parkingSpacesSubscription.unsubscribe();
    }
  }

  // save parking spot status to LocalStorage
  reserveSpot() {
    // setup JSON string for parking spot details
    const ps = {
      id: this.parkingSpace.id,
      title: this.parkingSpace.title,
      desc: this.parkingSpace.description,
      price: this.parkingSpace.price
    };

    // open a modal
    this.modalController
      .create({
        component: MakeReservationComponent,
        componentProps: { chosenParkingSpot: this.parkingSpace },
        animated: true
      })
      .then(modalElement => {
        modalElement.present();
        return modalElement.onDidDismiss();
      })
      .then(result => {
        // console.log(result.data, result.role);
        if (result.role === 'confirmModal') {
          console.log('parking space reserved!');
          // get parkingSpotData data
          const parkingData = result.data.parkingSpotData;
          // console.log('parkingData', parkingData);
          // create a new reservation
          this.reservationService.addReservation(
            this.parkingSpace.id, this.parkingSpace.title,
            this.parkingSpace.url, parkingData.firstName,
            parkingData.lastName, parkingData.reservedDayCount,
            parkingData.from, parkingData.to
          );
        }
      });

    // save to LocalStorage
    localStorage.setItem('spot_reserved', JSON.stringify(ps));
  }

}
