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
    {'time':'9:00 - 9:15','activity': 'Registration', 'place':'. . .', 'volunteer': '3 Students Volunteer','url':'none'},
    {'time':'9:15 - 9:30','activity': 'Chairs welcome', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'none'},
    {'time':'9:30 - 10:45','activity': 'Opening keynote Beverly May, VP of UX for GE Healthcare Digital', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'none'},
    {'time':'10:45 - 11:00','activity': 'BREAK', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'COFEE BREAK starting 14:45, Auditorium Foyer','url':'none'},
    {'time':'11:00 - 12:45','activity': 'Session 1 Human-computer studies, chair: Jessica Beltrán', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'COFEE BREAK starting 14:45, Auditorium Foyer','url':'none'},
    {'time':'11:00 - 11:30','activity': 'Modularity is the Key: A New Approach to Social Media Privacy Policies', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '2 Student Volunteer','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Modularity%20is%20the%20Key%20%20A%20New%20Approach%20to%20Social%20Media%20Privacy%20Policies.pdf'},
    {'time':'11:30 - 12:00','activity': 'Buenas Prácticas de Usabilidad para el Desarrollo de los Sistemas de la Universidad Tecnológica de la Mixteca', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Buenas%20Prácticas%20de%20Usabilidad%20para%20el%20Desarrollo%20de%20los%20Sistemas%20de%20la%20Universidad%20Tecnológica%20de%20la%20Mixteca.pdf '},
    {'time':'12:00 - 12:30','activity': 'La Inclusión de los Estudiantes a la Innovación Tecnológica: Producción y Comercialización de Proyectos Académicos ', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Including%20Students%20in%20Technological%20Development_%20Production%20and%20Marketing%20of%20Academic%20Projects%20%E2%80%93%20Student%20%20Design%20Competition.pdf'},
    {'time':'12:30 - 12:45','activity': 'A preliminary study using a web camera based eye tracking to assess novelty reaction allowing user interaction (Short paper)', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/A preliminary study using a web camera based eye tracking to assess novelty reaction allowing user interaction.pdf'},
    {'time':'12:45 - 14:00','activity': 'FOOD', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'none'},
    {'time':'14:00 - 15:15','activity': 'Session 2 Assistive Technologies, chair: Dago Cruz', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': '2 Student Volunteer','url':'none'},
    {'time':'14:00 - 14:15','activity': 'Códice : Assisting Vocabulary Learning for Students with Deafness (Short paper)', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/C%C3%B3dice_%20Assisting%20Vocabulary%20Learning%20for%20Students%20with%20%20Deafness.pdf'},
    {'time':'14:15 - 14:45','activity': 'Designing Interaction in a Speaking System for the Blind and Low Vision: Case Study', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Designing%20Interaction%20in%20a%20Speaking%20System%20for%20the%20Blind%20%20and%20Low%20Vision_%20Case%20Study.pdf'},
    {'time':'14:45 - 15:15','activity': 'RehWave: A Real-Time Tele-Rehabilitation Haptic Device for Massage Therapy', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/RehWave_%20A%20Real-Time%20Tele-Rehabilitation%20Haptic%20Device%20for%20%20Massage%20Therapy.pdf'},
    {'time':'15:15 - 15:30','activity': 'BREAK', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'COFEE BREAK starting 14:45, Auditorium Foyer','url':'none'},
    {'time':'15:30 - 16:30','activity': 'Poster session ', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'COFEE BREAK starting 14:45, Auditorium Foyer','url':'none'},
    {'time':' - - -','activity': 'See http://www.mexihc.org/2018/accepted.html ', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'none'},
    {'time':'16:30 - 17:45','activity': 'Keynote Saiph Savage, Assistant Professor of Computer Science at West Virginia University', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'none','url':'none'},
    {'time':'18:00 - 20:00','activity': 'Gala Dinner', 'place':'Auditorio "Manuel Cepeda Peraza"', 'volunteer': 'Student Volunteers','url':'none'}
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
