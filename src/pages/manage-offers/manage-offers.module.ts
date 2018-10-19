import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageOffersPage } from './manage-offers';

@NgModule({
  declarations: [
    ManageOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageOffersPage),
  ],
})
export class ManageOffersPageModule {}
