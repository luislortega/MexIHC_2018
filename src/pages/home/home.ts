import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//pages
import { ColoquioPage } from '../coloquio/coloquio';
import { PapersPage } from '../papers/papers';
import { CompetitionPage } from '../competition/competition';
import { PostersPage } from '../posters/posters';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  menu_cards = [
    {'nombre' : "FULL AND SHORT PAPERS", 'url' : PapersPage},
    {'nombre' : "GRADUATE COLLOQUIUM", 'url' : ColoquioPage},
    {'nombre' : "STUDENTS DESIGN COMPETITION", 'url' : CompetitionPage},
    {'nombre' : "POSTERS", 'url' : PostersPage}
  ];

  constructor(public navCtrl: NavController) { }

  pushActivity(pushPageParm: any){
    this.navCtrl.push(pushPageParm);
  }

}
