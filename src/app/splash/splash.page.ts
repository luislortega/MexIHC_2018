import { Component, OnInit } from '@angular/core';
//import { ViewController } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public splashScreen: SplashScreen) {
 
  }
 /*
  ionViewDidEnter() {
 
    this.splashScreen.hide();
 
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);
 
  }*/

  ngOnInit() {
  }

}
