import { Component, OnInit } from '@angular/core';
import { ParkingSpacesService } from '../parking-spaces.service';
import { ParkingSpaces } from '../parking-spaces.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {
  spaces: ParkingSpaces[];
  numOfClicks = 1; // keep track of clicks

  constructor(
    private parkingSpacesService: ParkingSpacesService,
    private router: Router) { }

  ngOnInit() {
    this.spaces = this.parkingSpacesService.parkingSpaces;
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
