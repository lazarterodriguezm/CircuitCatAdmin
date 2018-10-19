import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageReservationsPage } from './manage-reservations';

@NgModule({
  declarations: [
    ManageReservationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageReservationsPage),
  ],
})
export class ManageReservationsPageModule {}
