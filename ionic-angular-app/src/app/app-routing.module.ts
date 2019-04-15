import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'parking-spaces', pathMatch: 'full' },
  { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationPageModule' },
  { path: 'parking-spaces', loadChildren: './parking-spaces/parking-spaces.module#ParkingSpacesPageModule' },
  { path: 'reservations', loadChildren: './reservations/reservations.module#ReservationsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
