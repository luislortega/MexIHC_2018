import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostersPage } from './posters';

@NgModule({
  declarations: [
    //PostersPage,
  ],
  imports: [
    IonicPageModule.forChild(PostersPage),
  ],
})
export class PostersPageModule {}
