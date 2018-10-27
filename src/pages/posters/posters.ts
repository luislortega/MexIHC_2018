import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer } from '@ionic-native/document-viewer';

/**
 * Generated class for the PostersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posters',
  templateUrl: 'posters.html',
})
export class PostersPage {

  menu_posters = [
    {'title': '¿Como podria ayudar un sistema interactivo a reforzar el recuerdo de los aromas en pacientes con deficit olfativo', 'name': 'Jennifer Merino Hernández, Zulma J. Hernández Paxtián, María del R. Peralta Calvo, Israel J. Orlando Guerrero'},
    {'title': 'Aplicacion de la Gamificacion como herramienta de apoyo para el M-Learning sobre el proceso de polinizacion de las abejas', 'name': 'Carlos Eduardo Mena Alpuche, Víctor Hugo Menéndez Domínguez, José Chavier De Araujo Freitas, Yolanda Beatriz Moguel Ordóñez, Edith Coello Cervera'},
    {'title': 'Aplicacion movil para recoleccion de datos de arboles usando crowdsourcing', 'name':'Franco-Gaona Erick, Avila-Garcia Maria Susana'},
    {'title': 'Desarrollo de un analisis contextual para mejorar la usabilidad en sitios web: Caso practico herbario digital', 'name':'Alma Delia Olmos Pantoja, María del Rosario Peralta Calvo, Zulma Janet Hernández Paxtián, Rocío Rosas López.'},
    {'title': 'Design of serious games to assist the reading comprehesion of technical texts', 'name': 'Juan Carlos Avilés-Díaz, María Susana Avila-Garcia'},
    {'title': 'Diseño de interfaces con tecnologia tactil para adultos mayores', 'name':'Aldo Hernández Miguel, Carlos A. Martínez Sandoval, Ma. De Jesús Pérez Álvarez, Neydi Yutzil López Renovato, Ulises Hernández Barrios.'},
    {'title': 'Diseño de una aplicacion movil con realidad aumentada para coadyuvar en el proceso de aprendizaje matematico', 'name':'Eduardo Sosa-Jiménez, José López-Martínez, Victor Chi-Pech, Omar Sosa-Tzec'},
    {'title': 'Estimating kinetic energy for therapy sessions', 'name':'Alejandro Romero, Raymundo Cornejo, Fernando Martínez, Claudia Barraza, Vania Álvarez'},
    {'title': 'Extension de las fronteras del uso de equipos de computo: de pacientes con E.L.A. a personas con dispacacidad motriz severa', 'name':'Yasbedh Oswaldo Quiñones Uicab, Víctor Hugo Menéndez Domínguez'},
    {'title': 'Gamificacion para el aprendizaje de la apicultura', 'name': 'Luis Gerardo Castillo Pinkus, Víctor Hugo Menéndez Domínguez, José Chavier De Araujo Freitas, Yolanda Beatriz Moguel Ordóñez, Edith Coello Cervera'},
    {'title': 'Hacia un sistema parlante para personas ciegas y de baja vision', 'name':'Yusmar Alexis Flores Alvarado, Nieves Jiménez Mía, Antonio Arriaga Fierro, María del Rosario Peralta Calvo, Zulma Janet Hernández Paxtián.'},
    {'title': 'PaU: Diseño de un exergame en una superficie elastica para niños con autismo severo', 'name': 'Gloria I. Monarca, Arturo Morales-Téllez, Franceli L. Cibrian, Mónica Tentori'},
    {'title': 'RouteMe: una aplicacion movil para el uso de transporte publico en paises en desarrollo: Caso de Tijuana', 'name': 'Adolfo De la Torre, Jesús Manuel Chaidez Avelar, Lizbeth Escobedo'},
    {'title': 'Self-Monitoring of blood glucose: the user experience and device interactions of older adults with type 2 diabetes mellitus', 'name': 'S. Daphne Prado-Jimenez, Rosa Amelia Rosales-Cinco, Carlos Aceves-Gonzalez, Alexandra R. Lang'},
    {'title': 'Smart pens to assist fibre optic sensors research: evaluating OCR tools', 'name': 'Anne Dozias*, Cristian Camilo Otalora-Leguizamón, Marco Bianchetti, Maria Susana Avila-Garcia'},
    {'title': "User experience delight from the designer's perspective", 'name': 'Omar Sosa-Tzec'},
    {'title': 'Utilizacion de conceptos de gamificacion para reducir la violencia de genero contra las mujeres', 'name':'Cuauhtémoc Rivera-Loaiza, Marco A. Nava Aguilar'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public document: DocumentViewer) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostersPage');
  }

}
