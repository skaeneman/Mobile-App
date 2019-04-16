import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-space-info',
  templateUrl: './space-info.page.html',
  styleUrls: ['./space-info.page.scss'],
})
export class SpaceInfoPage implements OnInit {

  constructor(private router: Router, private navController: NavController) { }

  ngOnInit() {
  }

  reserveSpot() {
    this.navController.navigateBack('/parking-spaces/tabs/find');
  }

}
