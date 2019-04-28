import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('googleMap') googleMapElementRef: ElementRef;
  googleMapsKey = 'AIzaSyD61Un3DswF8Pu1c1pCXZ3LAl045sLXGQs';
  mapClickListener: any;
  googleMaps: any;

  constructor(private modalController: ModalController,
              private mapRenderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // show the map on page load
    this.getMaps()
    .then(maps => {
      this.googleMaps = maps;
      const mapElmt = this.googleMapElementRef.nativeElement;
      // render new map
      const map = new maps.Map(mapElmt, {
        // starting elements for map
        center: { lat: 42.350552, lng: -71.105404 },
        zoom: 15
      });
      this.googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.mapRenderer.addClass(mapElmt, 'visible');
      });
      // enable user to click on a map point
      this.mapClickListener = map.addListener('click', clickEvent => {
        // lat\long the user clicked on
        const userCoordinates = {
          lat: clickEvent.latLng.lat(),
          lng: clickEvent.latLng.lng()
        };
        // close modal
        this.modalController.dismiss(userCoordinates);
      });
    })
    .catch(error => {
      console.log(error);
    });

  }

  // closes the modal when button clicked
  onCancel() {
    this.modalController.dismiss();
  }

  ngOnDestroy() {
    // get rid of click listener to avoid memory leak
    this.googleMaps.event.removeListener(this.mapClickListener);
  }

  // get Google maps
  private getMaps(): Promise<any> {
    const win = window as any;
    const googleMapsModule = win.google;

    // load Google maps SDK
    if (googleMapsModule && googleMapsModule.maps) {
      return Promise.resolve(googleMapsModule.maps);
    }
    // load Google map for the first time
    return new Promise((resolve, reject) => {
      // interact with DOM
      const mapscript = document.createElement('script');
      mapscript.src =
        'https://maps.googleapis.com/maps/api/js?key=' + this.googleMapsKey;
      // load map without blocking
      mapscript.async = true;
      mapscript.defer = true;
      document.body.appendChild(mapscript);
      mapscript.onload = () => {
        const loadedGoogleMapsModule = win.google;
        if (loadedGoogleMapsModule && loadedGoogleMapsModule.maps) {
          resolve(loadedGoogleMapsModule.maps);
        } else {
          reject('Oops Google maps SDK error...');
        }
      };
    });
  }

}
