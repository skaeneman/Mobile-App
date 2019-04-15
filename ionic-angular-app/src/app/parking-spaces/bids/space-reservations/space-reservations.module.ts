import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpaceReservationsPage } from './space-reservations.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceReservationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpaceReservationsPage]
})
export class SpaceReservationsPageModule {}
