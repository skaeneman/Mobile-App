import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParkingSpaces } from '../../parking-spaces.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ParkingSpacesService } from '../../parking-spaces.service';

@Component({
  selector: 'app-space-reservations',
  templateUrl: './space-reservations.page.html',
  styleUrls: ['./space-reservations.page.scss'],
})
export class SpaceReservationsPage implements OnInit, OnDestroy {
parkingSpace: ParkingSpaces;
private parkingSpacesSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private navController: NavController,
              private parkingSpacesService: ParkingSpacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // if there is no parkingSpaceId
      if (!paramMap.has('parkingSpaceId')) {
        this.navController.navigateBack('/parking-spaces/tabs/bids');
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

}
