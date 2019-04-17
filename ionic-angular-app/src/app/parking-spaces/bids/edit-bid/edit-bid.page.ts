import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingSpacesService } from '../../parking-spaces.service';
import { NavController } from '@ionic/angular';
import { ParkingSpaces } from '../../parking-spaces.model';


@Component({
  selector: 'app-edit-bid',
  templateUrl: './edit-bid.page.html',
  styleUrls: ['./edit-bid.page.scss'],
})
export class EditBidPage implements OnInit {
  parkingSpace: ParkingSpaces;

  constructor(
    private activatedRoute: ActivatedRoute,
    private parkingSpacesService: ParkingSpacesService,
    private navController: NavController
  ) { }

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
