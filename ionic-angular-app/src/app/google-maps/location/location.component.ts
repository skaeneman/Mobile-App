import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapComponent } from '../map/map.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  googleMapsKey = 'AIzaSyD61Un3DswF8Pu1c1pCXZ3LAl045sLXGQs';

  constructor(private modalController: ModalController,
              private http: HttpClient) { }

  ngOnInit() {}

  // opens modal to display map
  onSelectLocation() {
    this.modalController.create({ component: MapComponent})
      .then(modalElement => {
        modalElement.onDidDismiss().then(mapModalData => {
          if (!mapModalData.data) {
            return;
          }
          // retrieve map address
          this.getMapAddress(mapModalData.data.lat, mapModalData.data.lng)
            .subscribe(address => {
              console.log(address);
            }
          );
        });
      modalElement.present();  // show the modal
    });
  }

  private getMapAddress(lat: number, lng: number) {
    return this.http
      .get<any>(
        // lookup an address
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.googleMapsKey}`
      )
      .pipe(
        // get a single address from the map click
        map(mapGeolocation => {
          if (!mapGeolocation || mapGeolocation.results.length === 0 || !mapGeolocation.results) {
            return null; // return null if no address found
          }
          // return the first element in the results array for the address
          return mapGeolocation.results[0].formatted_address;
        })
      );
  }

}
