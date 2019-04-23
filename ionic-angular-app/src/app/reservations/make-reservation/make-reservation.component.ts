import { Component, OnInit, Input } from '@angular/core';
import { ParkingSpaces } from '../../parking-spaces/parking-spaces.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss'],
})
export class MakeReservationComponent implements OnInit {
@Input() chosenParkingSpot: ParkingSpaces;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onReserveSpot() {
    this.modalController.dismiss({message: 'closing modal'}, 'confirmModal');
  }

  onCancel() {
    this.modalController.dismiss(null, 'cancel modal');
  }

}

