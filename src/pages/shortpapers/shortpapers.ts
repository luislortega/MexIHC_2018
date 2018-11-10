import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
    {'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/A%20Computer%20Graphics%20Program%20to%20Make%20Exercises%20Using%20the%20%20Kinect%20Device.pdf','title': 'A Computer Graphics Program to Make Exercises Using the Kinect Device', 'name':'Francisco Madera Ramirez, Emilio Segura Pool, Jorde Rios Martinez'},
    {'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/A preliminary study using a web camera based eye tracking to assess novelty reaction allowing user interaction.pdf','title': 'A preliminary study using a web camera based eye tracking to assess novelty reaction allowing user interaction', 'name':'Jessica Beltrán, Isaac Ríos Vázquez, Ámbar S. Sánchez Cortez, René F. Navarro, Luis A. Maldonado Cano, Mireya S. García Vázquez'},
    {'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/C%C3%B3dice_%20Assisting%20Vocabulary%20Learning%20for%20Students%20with%20%20Deafness.pdf','title': 'Códice: Assisting Vocabulary Learning for Students with Deafness', 'name':'Claudia Quiroz Pelayo, JRG Pulido, María Andrade Aréchiga, Silvia Fajardo Flores'},
    {'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/From Touches to Teamwork Constructs_ Towards Automatically Visualising Collaboration Processes.pdf ','title': 'From Touches to Teamwork Constructs: Towards Automatically Visualising Collaboration Processes', 'name':'Adrian Venegas Reynoso, Laura Sanely Gaytán Lugo, Roberto Martinez Maldonado'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ia: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShortpapersPage');
  }

  openPDF(urlTxt){
    let url = encodeURIComponent(urlTxt); 
    this.ia.create('https://docs.google.com/viewer?url=' + url);
  }

}
