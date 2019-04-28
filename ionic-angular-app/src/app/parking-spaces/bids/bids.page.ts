import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParkingSpacesService } from '../parking-spaces.service';
import { ParkingSpaces } from '../parking-spaces.model';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.page.html',
  styleUrls: ['./bids.page.scss'],
})
export class BidsPage implements OnInit, OnDestroy {
  spaces: ParkingSpaces[];
  currentUser: string;

  private parkingSpacesSubscription: Subscription;

  constructor(private parkingSpacesService: ParkingSpacesService,
              private authService: AuthenticationService) { }

  ngOnInit() {
    this.parkingSpacesSubscription =
        this.parkingSpacesService.parkingSpaces.subscribe(spots => {
          this.spaces = spots;
          this.currentUser = this.authService.userId;
        });
  }

  ngOnDestroy() {
    if (this.parkingSpacesSubscription) {
      this.parkingSpacesSubscription.unsubscribe();
    }
  }

}
