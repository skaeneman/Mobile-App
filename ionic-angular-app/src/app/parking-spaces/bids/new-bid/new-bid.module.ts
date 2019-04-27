import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewBidPage } from './new-bid.page';
import { GoogleMapsModule } from '../../../google-maps/google-maps.module';

const routes: Routes = [
  {
    path: '',
    component: NewBidPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GoogleMapsModule
  ],
  declarations: [NewBidPage]
})
export class NewBidPageModule {}
