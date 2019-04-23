import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpaceInfoPage } from './space-info.page';
import { MakeReservationComponent } from '../../../reservations/make-reservation/make-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: SpaceInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpaceInfoPage, MakeReservationComponent],
  entryComponents: [MakeReservationComponent]
})
export class SpaceInfoPageModule {}
