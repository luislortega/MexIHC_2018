import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionPage } from './competition';

@NgModule({
  declarations: [
    CompetitionPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionPage),
  ],
})
export class CompetitionPageModule {}
