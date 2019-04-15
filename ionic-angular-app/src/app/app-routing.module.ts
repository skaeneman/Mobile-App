import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'parking-spaces', pathMatch: 'full' },
  { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationPageModule' },
  { path: 'parking-spaces', loadChildren: './parking-spaces/parking-spaces.module#ParkingSpacesPageModule' },
  { path: 'find', loadChildren: './parking-spaces/find/find.module#FindPageModule' },
  { path: 'bids', loadChildren: './parking-spaces/bids/bids.module#BidsPageModule' },
  { path: 'new-bid', loadChildren: './parking-spaces/bids/new-bid/new-bid.module#NewBidPageModule' },
  { path: 'edit-bid', loadChildren: './parking-spaces/bids/edit-bid/edit-bid.module#EditBidPageModule' },
  { path: 'space-info', loadChildren: './parking-spaces/find/space-info/space-info.module#SpaceInfoPageModule' },
  { path: 'space-reservations', loadChildren: './parking-spaces/bids/space-reservations/space-reservations.module#SpaceReservationsPageModule' },
  { path: 'reservations', loadChildren: './reservations/reservations.module#ReservationsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
