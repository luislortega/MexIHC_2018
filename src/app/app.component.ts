import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashPage } from '../app/splash/splash.page';
import { timer } from 'rxjs';
/*import { ModalController } from 'ionic-angular';*/


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  //showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar//,
    /*private modalCtrl: ModalController*/
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      /*let splash = this.modalCtrl.create(SplashPage);
      splash.present();*/

      //timer(3000).subscribe(() => this.showSplash = false);
    });
  }
}
