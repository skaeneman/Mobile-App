import { Component, OnInit } from '@angular/core';
import { ParkingSpacesService } from '../parking-spaces.service';
import { ParkingSpaces } from '../parking-spaces.model';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {
  spaces: ParkingSpaces[];

  constructor(private parkingSpacesService: ParkingSpacesService) { }

  ngOnInit() {
    this.spaces = this.parkingSpacesService.parkingSpaces;
  }

}
