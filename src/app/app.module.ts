import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { ManageHomePage } from '../pages/manage-home/manage-home';
import { ManageReservationsPage } from '../pages/manage-reservations/manage-reservations';
import { ManageOffersPage } from '../pages/manage-offers/manage-offers';
import { ScanQrPage } from '../pages/scan-qr/scan-qr';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ManageHomePage,
    ManageReservationsPage,
    ManageOffersPage,
    ScanQrPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ManageHomePage,
    ManageReservationsPage,
    ManageOffersPage,
    ScanQrPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
