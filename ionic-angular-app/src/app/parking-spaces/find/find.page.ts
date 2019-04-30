import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParkingSpacesService } from '../parking-spaces.service';
import { ParkingSpaces } from '../parking-spaces.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit, OnDestroy {
  parkingSpaces: ParkingSpaces[];
  numOfClicks = 1; // keep track of clicks
  private parkingSpacesSubscription: Subscription;

  constructor(
    private parkingSpacesService: ParkingSpacesService,
    private router: Router) { }

  ngOnInit() {
    // load parking spaces and ensure they update when changed
    this.parkingSpacesSubscription =
      this.parkingSpacesService.parkingSpaces.subscribe(spots => {
        this.parkingSpaces = spots;
      });
  }

  ngOnDestroy() {
    if (this.parkingSpacesSubscription) {
      this.parkingSpacesSubscription.unsubscribe();
    }
  }

  // route to the parking space info page and save count to local storage
  getSpaceInfo(space: any) {
    const sId = space.id;
    this.router.navigate(['/', 'parking-spaces', 'tabs', 'find', sId]);

    // retrieve from LocalStorage
    let lclStorageCnt = JSON.parse(localStorage.getItem('parking_spots_viewed'));
    lclStorageCnt += this.numOfClicks;  // increment count
    // save back to LocalStorage
    localStorage.setItem('parking_spots_viewed', JSON.stringify(lclStorageCnt));
  }
}
