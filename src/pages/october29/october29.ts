import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the October29Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-october29',
  templateUrl: 'october29.html',
})
export class October29Page {

  tabla_29 = [
    {'time':'8:00 - 9:00','activity': 'Registration', 'place':'. . .', 'volunteer': '3 Student Vounteer', 'url':'none'},
    {'time':'9:00 - 9:15','activity': 'Graduate colloquium (GC) welcome', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': '2 Student Volunteer', 'url':'none'},
    {'time':'9:15 - 9:45','activity': 'Interactive interface and serious game for the detection of deficiencies in cognitive functions in preschool', 'place':'Audiovisual "Eduardo Urzaiz"', 'volunteer': 'none', 'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Interactive interface and serious game for the detection of deficiencies in cognitive functions in preschool children.pdf '},
    {'time':'9:45 - 10:15','activity': 'Wearable technology as a mediator for communication and learning', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': 'none','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Wearable Technology as a Mediator for Communication and Learning.pdf '},
    {'time':'10:15 - 10:45','activity': 'User interfaces design through the use of human computer-interaction pattems', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': 'none','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/User Interfaces design through the use of Human Computer-Interaction Patterns.pdf '},
    {'time':'10:45 - 11:15','activity': 'Ambient computing to support in-home seniors medication habits', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': 'none','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Ambient Computing to Support in-home Seniors Medication Habits.pdf '},
    {'time':'11:15 - 11:30','activity': 'BREAK', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': 'COFEE BREAK starting 10:45, Auditorium Foyer', 'url':'none'},
    {'time':'11:30 - 12:00','activity': 'Development of a Serious Game to strengthen Mathematical Logical Reasoning with implementation of Fuzzy Logic System', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': 'COFEE BREAK starting 10:45, Auditorium Foyer', 'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Development of a Serious Game to strengthen Mathematical Logical Reasoning with implementation of Fuzzy Logic System.pdf '},
    {'time':'12:00 - 12:30','activity': 'iTVCare: a home care system for the elderly through interactive television', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': '2 Student Volunteer','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/iTVCare a home care system for the elderly through interactive television.pdf ' },
    {'time':'12:30 - 13:00','activity': 'Estudio de la triada sígnica en los patrones de diseño de interfaces gráficas', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': 'none', 'url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Estudio de la triada sígnica en los patrones de diseño de interfaces gráficas.pdf '},
    {'time':'13:00 - 13:30','activity': 'Aplicación Gamificada para Apoyo en la Educación de Personas con Diabetes', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': 'none', 'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Colloquium/Aplicación Gamificada para Apoyo en la Educación dePersonas con Diabetes.pdf '},
    {'time':'13:30 - 15:30','activity': 'FOOD', 'place':'Audiovisual "Eduardo Urzaiz', 'volunteer': 'none', 'url':'none'},
    {'time':'15:30 - 15:59','activity': 'Boarding buses', 'place':'Papers, SDC, GC, Posters', 'volunteer': '3 Student Vounteer Mun ha, Busses','url':'none'},
    {'time':'16:00','activity': 'Uxmal departure', 'place':'Papers, SDC, GC, Posters', 'volunteer': '3 Student Vounteer Mun ha, Busses', 'url':'none'},
    {'time':'17:30 - 18:50','activity': 'Visiting the chocolate museum', 'place':'Optional(at your own)', 'volunteer': '3 Student Vounteer Mun ha, Busses', 'url':'none'},
    {'time':'19:00 - 19:45','activity': 'Uxmal light show', 'place':'. . .', 'volunteer': '3 Student Vounteer Mun ha, Busses','url':'none'},
    {'time':'20:15 - 22:00','activity': 'Welcome cocktail', 'place':'https://www.munha.org/', 'volunteer': '3 Student Vounteer Mun ha, Busses', 'url':'none'},
    {'time':'22:00','activity': 'Return to merida', 'place':'. . .', 'volunteer': '3 Student Vounteer Mun ha, Busses','url':'none'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ia: InAppBrowser) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad October29Page');
  }

  openPDF(urlTxt){
    let url = encodeURIComponent(urlTxt); 
    this.ia.create('https://docs.google.com/viewer?url=' + url);
  }

}
