import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { NavController } from '@ionic/angular';
//import {Subject} from 'rxjs';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.page.html',
  styleUrls: ['./papers.page.scss'],
})
export class PapersPage implements OnInit {

  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions){}

  ngOnInit() {
  }

  /*goBack() {

    if(this.navCtrl.canGoBack()) {
      let options: NativeTransitionOptions = {
        direction: 'down',
        duration: 500,
        slowdownfactor: -1,
        slidePixels: 20
      }

      this.nativePageTransitions.slide(options);
      this.navCtrl.pop();
    }
    else {
      let options: NativeTransitionOptions = {
        duration: 800
      }

      this.nativePageTransitions.fade(options);
      this.navCtrl.setRoot('HomePage')
    }

  /*}

}
