import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
//Pagen that need
import { FullpapersPage } from '../fullpapers/fullpapers';
import { ShortpapersPage } from '../shortpapers/shortpapers'; 
/**
 * Generated class for the PapersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-papers',
  templateUrl: 'papers.html',
})
export class PapersPage {

  menu_papers = [
    {'title': 'FULL', 'url' : FullpapersPage},
    {'title': 'SHORT', 'url' : ShortpapersPage}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PapersPage');
  }

  openPaper(paper: any){
    //this.navCtrl.push(paper);
    const modal = this.modalCtrl.create(paper);
    modal.present();
  }

}
