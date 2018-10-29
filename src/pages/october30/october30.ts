import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the October30Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-october30',
  templateUrl: 'october30.html',
})
export class October30Page {

  tabla_30 = [
    {'time':'22:00','activity': 'Return to merida', 'place':'. . .', 'volunteer': '3 Student Vounteer','url':'none'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ia: InAppBrowser) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad October30Page');
  }

  openPDF(urlTxt){
    let url = encodeURIComponent(urlTxt); 
    this.ia.create('https://docs.google.com/viewer?url=' + url);
  }

}
