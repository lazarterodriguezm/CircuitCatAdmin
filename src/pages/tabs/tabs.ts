import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ManageHomePage } from '../manage-home/manage-home';
import { ManageReservationsPage } from '../manage-reservations/manage-reservations';
import { ManageOffersPage } from '../manage-offers/manage-offers';
import { ScanQrPage } from '../scan-qr/scan-qr';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  manageHomeRoot = ManageHomePage;
  manageReservationsRoot = ManageReservationsPage;
  manageOffersRoot = ManageOffersPage;
  scanQrRoot = ScanQrPage;


  constructor(public navCtrl: NavController) {}

}
