import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ParkingSpacesPage } from './parking-spaces.page';
import { ParkingSpacesRoutingModule } from './parking-spaces-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ParkingSpacesRoutingModule
  ],
  declarations: [ParkingSpacesPage]
})
export class ParkingSpacesPageModule {}
