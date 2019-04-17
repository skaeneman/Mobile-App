import { Component, OnInit } from '@angular/core';
import { ParkingSpaces } from '../../parking-spaces.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ParkingSpacesService } from '../../parking-spaces.service';

@Component({
  selector: 'app-space-reservations',
  templateUrl: './space-reservations.page.html',
  styleUrls: ['./space-reservations.page.scss'],
})
export class SpaceReservationsPage implements OnInit {
parkingSpace: ParkingSpaces;

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
      this.parkingSpace = this.parkingSpacesService.findParkingSpace(paramMap.get('parkingSpaceId'));
    });
  }

}
