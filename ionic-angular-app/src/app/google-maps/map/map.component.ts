import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  // closes the modal when button clicked
  onCancel() {
    this.modalController.dismiss();
  }

}
