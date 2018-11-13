import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the October31Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-october31',
  templateUrl: 'october31.html',
})
export class October31Page {

  tabla_31 = [
    {'time': '10:15 - 10:30', 'activity': 'Opening by SDC Chairs', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'none'},
    {'time': '10:30 - 10:45', 'activity': '”Kuali: Distribuyendo comida por un bien” Julieta Navarro Rivera,  Erika Yunuen Torres Torres, Giovanny Alfonso Chávez Ceniceros, Raymundo Cornejo', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Competition/Document_KUALI_MexIHC2018.pdf '},
    {'time': '10:45 - 11:00', 'activity': '“HIPO: Aplicación multiplataforma para el apoyo del aprendizaje de habilidades matemáticas dirigida a personas con discapacidad intelectual” Abies C. Durán L., Mario A. Marín B., Karla N. Rocha R.,  Julián Cárdenas P., Aída L. González L.', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Competition/HIPO-Aplicacioìn-observ-final.pdf '},
    {'time': '11:00 - 11:15', 'activity': '“Tisekuae Xuta Xtaya: Ayuda a las Personas Sordas” Eduardo Armas García, Rafael Cano Martínez, Víctor Hernández Vásquez, Luis C. Mota Carrera, María del Rosario Peralta Calvo. ', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Competition/Paper_AyudaPersonasSordasCameraReady.pdf '},
    {'time': '11:15 - 11:30', 'activity': 'BREAK', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'none'},
    {'time': '11:30 - 12:10', 'activity': 'SDC Chairs Talk', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'none'},
    {'time': '12:10 - 12:25', 'activity': '“Diseño de una Herramienta para Entregar en el Lugar aPoyo al indigente: HELPi” Alain Diaz-Montes, Carlos G. Verdin, Carlos A, Puga, Ricardo Rodríguez-Torres, Marcela D. Rodríguez. ', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Competition/Helpi.pdf '},
    {'time': '12:25 - 12:40', 'activity': '“Kandii Puzzle: Rompecabezas interactivo para apoyar la discapacidad intelectual” David May, Diana Arias, Lorena Baez, Miguel Rivera, Rafael Luna.  ', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Competition/Kandiipuzzle_rompecabezas interactivo.pdf '},
    {'time': '12:40 - 12:55', 'activity': 'Select the winner', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'none'},
    {'time': '12:55 - 13:05', 'activity': 'Awards and closing', 'place': 'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '- - -', 'url':'none'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public ia: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad October31Page');
  }

  openPDF(urlTxt){
    let url = encodeURIComponent(urlTxt);
    this.ia.create('https://docs.google.com/viewer?url=' + url);
  }

}
