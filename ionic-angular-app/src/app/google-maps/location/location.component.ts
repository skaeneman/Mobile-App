import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  // opens modal to display map
  onSelectLocation() {
    this.modalController.create({ component: MapComponent})
      .then(modalElement => {
        modalElement.present();  // show the modal
      });
  }

}
