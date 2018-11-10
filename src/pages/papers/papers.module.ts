import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PapersPage } from './papers';

@NgModule({
  declarations: [
    PapersPage,
  ],
  imports: [
    IonicPageModule.forChild(PapersPage),
  ],
})
export class PapersPageModule {}
