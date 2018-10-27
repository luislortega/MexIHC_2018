import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShortpapersPage } from './shortpapers';

@NgModule({
  declarations: [
    ShortpapersPage,
  ],
  imports: [
    IonicPageModule.forChild(ShortpapersPage),
  ],
})
export class ShortpapersPageModule {}
