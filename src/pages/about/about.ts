import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { October29Page } from '../october29/october29';
import { October30Page } from '../october30/october30';
import { October31Page } from '../october31/october31';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  menu_schedule = [
    {'title': 'OCTOBER 29', 'url': October29Page},
    {'title': 'OCTOBER 30', 'url': October30Page},
    {'title': 'OCTOBER 31', 'url': October31Page}
  ];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  openPaper(schedule: any){
    //this.navCtrl.push(paper);
    const modal = this.modalCtrl.create(schedule);
    modal.present();
  }

}
