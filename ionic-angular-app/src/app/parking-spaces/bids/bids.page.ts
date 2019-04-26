import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParkingSpacesService } from '../parking-spaces.service';
import { ParkingSpaces } from '../parking-spaces.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.page.html',
  styleUrls: ['./bids.page.scss'],
})
export class BidsPage implements OnInit, OnDestroy {
  spaces: ParkingSpaces[];
  private parkingSpacesSubscription: Subscription;

  constructor(private parkingSpacesService: ParkingSpacesService) { }

  ngOnInit() {
    this.parkingSpacesSubscription = 
        this.parkingSpacesService.parkingSpaces.subscribe(spots => {
          this.spaces = spots;
        });
  }

  ngOnDestroy() {
    if (this.parkingSpacesSubscription) {
      this.parkingSpacesSubscription.unsubscribe();
    }
  }
}
