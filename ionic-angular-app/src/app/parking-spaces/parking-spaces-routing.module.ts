import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingSpacesPage } from './parking-spaces.page';

const routes: Routes = [
  {
      path: 'tabs',
      component: ParkingSpacesPage,
      children: [
          {
              path: 'find', children: [
              {
                  path: '',
                  loadChildren: './find/find.module#FindPageModule'
              },
              {
                  path: ':parkingSpaceId',
                  loadChildren: './find/space-info/space-info.module#SpaceInfoPageModule'
              }
          ]
        },
        {
            path: 'bids',
            children: [
                {
                    path: '',
                    loadChildren: './bids/bids.module#BidsPageModule'
                 },
                 {
                     // new bid route
                     path: 'new',
                     loadChildren: './bids/new-bid/new-bid.module#NewBidPageModule'
                 },
                 {
                     // space reservations
                     path: ':parkingSpaceId',
                     loadChildren: './bids/space-reservations/space-reservations.module#SpaceReservationsPageModule'
                }
            ]
        },
        {
            // homepage
            path: '',
            redirectTo: '/parking-spaces/tabs/find',
            pathMatch: 'full'
        }
      ]
  },
  {
      // homepage
      path: '',
      redirectTo: '/parking-spaces/tabs/find',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingSpacesRoutingModule { }
