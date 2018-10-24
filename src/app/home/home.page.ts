import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { NavController } from '@ionic/angular';

//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  private menu_cards = [
    {'nombre' : "FULL AND SHORT PAPERS", 'url' : "/papers"},
    {'nombre' : "GRADUATE COLLOQUIUM", 'url' : "/colloquium"},
    {'nombre' : "STUDENTS DESIGN COMPETITION", 'url' : "/competition"},
    {'nombre' : "POSTERS", 'url' : "/posters"}
  ];

  constructor(public navCtrl: NavController, private router: Router, private nativePageTransitions: NativePageTransitions){}

  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50,
      androiddelay: 50
    }

    this.nativePageTransitions.slide(options);
    //this.navCtrl.setRoot('FullshortPage');
  }

  flipPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    }

    this.nativePageTransitions.flip(options);
    //this.navCtrl.push('FullshortPage');
  }

  fadePage() {

    this.nativePageTransitions.fade(null);
    //this.navCtrl.setRoot('FullshortPage');
  }

  curlPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    }

    this.nativePageTransitions.curl(options);
    //this.navCtrl.setRoot('FullshortPage');
  }

  openPage(url : UrlTree):void{
    this.router.navigateByUrl(url);
  }
}
