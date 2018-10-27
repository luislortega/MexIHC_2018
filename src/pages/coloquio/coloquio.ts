import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ColoquioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coloquio',
  templateUrl: 'coloquio.html',
})
export class ColoquioPage {

  menu_coloquio = [
    {'title': 'Ambient computing to support in home seniors medication habits', 'name': 'Maribel Valenzuela-Beltrán', 'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Ambient Computing to Support in-home Seniors Medication Habits.pdf '},
    {'title': 'Aplicacion gamificada para apoyo en la educacion de personas con diabetes', 'name' : 'Andrea Stephania Arce-Jimenez, Norma Baron Ramirez, Juan Jose Contreras Castillo', 'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Aplicación Gamificada para Apoyo en la Educación dePersonas con Diabetes.pdf '},
    {'title': 'A serious game prototype for strengthen mathematical logical reasoning with implementation of fuzzy logic system', 'name': 'Alicia López Sánchez, Aida González Lara', 'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Development of a Serious Game to strengthen Mathematical Logical Reasoning with implementation of Fuzzy Logic System.pdf '},
    {'title': 'Estudio de la triada signica en los patrones de diseños de interfaces graficas', 'name': 'Edna P. Quezeda Bolañoz, Lizbeth Gallardo Lopez, Beatriz A. González Beltrán', 'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Estudio de la triada sígnica en los patrones de diseño de interfaces gráficas.pdf '},
    {'title': 'Interactive interface and serious game for the detection of deficiencies in cognitive functions in preschool children', 'name':'Alberto Sánchez Morales, Clausia Lizbeth Martinez González', 'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Interactive interface and serious game for the detection of deficiencies in cognitive functions in preschool children.pdf '},
    {'title': 'iTVcARE: a home care system for the elderly through interactive television', 'name': 'Pedo C. Santana Mancilla, Luis E. Anido Rifón', 'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/User Interfaces design through the use of Human Computer-Interaction Patterns.pdf '},
    {'title': 'Identifying Human-Computer interaction patterns in support of the user interfaces design', 'name':'Viridiana Silva Rodríguez, Sandra E. Nava Muñoz', 'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Wearable Technology as a Mediator for Communication and Learning.pdf '},
    {'title': 'Wearable techology ad a mediator for communication and learning', 'name':'Héctor M. Camarillo Abad', 'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/iTVCare a home care system for the elderly through interactive television.pdf '}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ia: InAppBrowser) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColoquioPage');
  }

  /**
   * Function to show PDF with native. 
   
  openPDF(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/test.pdf', 'application/pdf', options);
  } */

  openPDF(urlTxt){
    let url = encodeURIComponent(urlTxt); 
    this.ia.create('https://docs.google.com/viewer?url=' + url);
  }

}
