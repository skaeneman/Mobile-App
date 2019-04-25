import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ParkingSpaces } from '../../parking-spaces/parking-spaces.model';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss'],
})
export class MakeReservationComponent implements OnInit {
@Input() chosenParkingSpot: ParkingSpaces;
@ViewChild('parkingForm') form: NgForm;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onReserveSpot() {
    this.modalController.dismiss(
      { parkingSpotData:{
      firstName: this.form.value['f-name'],
      lastName: this.form.value['l-name'],
      reservedDayCount: this.form.value['num-days'],
      to: this.form.value['to'],
      from: this.form.value['from'],
      }
    }, 'confirmModal');
  }

  // compare 2 dates to make sure from date is less than to date
  validateDates() {
    const fromDate = new Date(this.form.value['from']);
    const toDate = new Date(this.form.value['to']);
    const isValid = toDate >= fromDate;
    return isValid;
  }

  onCancel() {
    this.modalController.dismiss(null, 'cancel modal');
  }

}

