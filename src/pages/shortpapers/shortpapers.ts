import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShortpapersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shortpapers',
  templateUrl: 'shortpapers.html',
})
export class ShortpapersPage {

  menu_shortpapers = [
    {'title': 'A Computer Graphics Program to Make Exercises Using the Kinect Device', 'name':'Francisco Madera Ramirez, Emilio Segura Pool, Jorde Rios Martinez'},
    {'title': 'A preliminary study using a web camera based eye tracking to assess novelty reaction allowing user interaction', 'name':'Jessica Beltrán, Isaac Ríos Vázquez, Ámbar S. Sánchez Cortez, René F. Navarro, Luis A. Maldonado Cano, Mireya S. García Vázquez'},
    {'title': 'Códice: Assisting Vocabulary Learning for Students with Deafness', 'name':'Claudia Quiroz Pelayo, JRG Pulido, María Andrade Aréchiga, Silvia Fajardo Flores'},
    {'title': 'From Touches to Teamwork Constructs: Towards Automatically Visualising Collaboration Processes', 'name':'Adrian Venegas Reynoso, Laura Sanely Gaytán Lugo, Roberto Martinez Maldonado'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShortpapersPage');
  }

}
