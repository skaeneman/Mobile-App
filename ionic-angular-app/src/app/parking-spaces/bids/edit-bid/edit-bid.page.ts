import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingSpacesService } from '../../parking-spaces.service';
import { NavController } from '@ionic/angular';
import { ParkingSpaces } from '../../parking-spaces.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-bid',
  templateUrl: './edit-bid.page.html',
  styleUrls: ['./edit-bid.page.scss'],
})
export class EditBidPage implements OnInit {
  parkingSpace: ParkingSpaces;
  form: FormGroup;

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
      
      // TODO: look at 177. 8.42 


      console.log('parking...', this.parkingSpace);

      // initialize edit form
      this.form = new FormGroup({
        title: new FormControl(this.parkingSpace.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.parkingSpace.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(100)]
        })
      });

    });
  }

}
