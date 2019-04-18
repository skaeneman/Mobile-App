import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ParkingSpacesService } from '../../parking-spaces.service';
import { ParkingSpaces } from '../../parking-spaces.model';

@Component({
  selector: 'app-space-info',
  templateUrl: './space-info.page.html',
  styleUrls: ['./space-info.page.scss'],
})
export class SpaceInfoPage implements OnInit {
  parkingSpace: ParkingSpaces;

  constructor(
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private parkingSpacesService: ParkingSpacesService
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
      this.parkingSpace = this.parkingSpacesService.findParkingSpace(paramMap.get('parkingSpaceId'));
    });
  }

  // save parking spot status to LocalStorage
  reserveSpot() {
    this.navController.navigateBack('/parking-spaces/tabs/find');
    localStorage.setItem('spot_reserved', JSON.stringify(true));
  }

}
