import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LocationComponent } from './location/location.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [LocationComponent, MapComponent],
  imports: [CommonModule, IonicModule],
  exports: [LocationComponent, MapComponent],
  entryComponents: [MapComponent]
})
export class GoogleMapsModule {}
