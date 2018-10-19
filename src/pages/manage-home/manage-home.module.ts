import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageHomePage } from './manage-home';

@NgModule({
  declarations: [
    ManageHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ManageHomePage),
  ],
})
export class ManageHomePageModule {}
