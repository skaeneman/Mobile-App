import { Component, OnInit } from '@angular/core';
import { ParkingSpacesService } from '../parking-spaces.service';
import { ParkingSpaces } from '../parking-spaces.model';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.page.html',
  styleUrls: ['./bids.page.scss'],
})
export class BidsPage implements OnInit {
  spaces: ParkingSpaces[];

  constructor(private parkingSpacesService: ParkingSpacesService) { }

  ngOnInit() {
    this.spaces = this.parkingSpacesService.parkingSpaces;
  }

}
