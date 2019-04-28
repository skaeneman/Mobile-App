import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapComponent } from '../map/map.component';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ParkingSpaceLocation } from '../../parking-spaces/parking-spaces-location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  googleMapsKey = 'AIzaSyD61Un3DswF8Pu1c1pCXZ3LAl045sLXGQs';
  @Output() addressSelect = new EventEmitter<ParkingSpaceLocation>();
  selectedMapImage: string;

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
          const selectedLocation: ParkingSpaceLocation = {
            address: null,
            mapImageUrl: null,
            lat: mapModalData.data.lat,
            lng: mapModalData.data.lng
          };
          // retrieve map address
          this.getMapAddress(mapModalData.data.lat, mapModalData.data.lng)
          .pipe( switchMap(address => {
            // get map image
            selectedLocation.address = address;
              return of(this.getGoogleMapStaticImage(selectedLocation.lat, selectedLocation.lng, 15));
            })
          )
          .subscribe(mapImageUrl => {
            selectedLocation.mapImageUrl = mapImageUrl;
            this.selectedMapImage = mapImageUrl;
            this.addressSelect.emit(selectedLocation);
          });

        });
      modalElement.present();  // show the modal
    });
  }

  // get a static image for the map location selected by the user 
  private getGoogleMapStaticImage(zoomIn: number, lat: number, long: number) {
    // console.log('inside getGoogleMapStaticImage...', zoomIn, lat, long);
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=${zoomIn}&size=550x350&maptype=roadmap
    &markers=color:red%7Clabel:Parking%20Space%7C${lat},${long}
    &key=${this.googleMapsKey}`;
  }


  // use geolocation API to get an address
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
