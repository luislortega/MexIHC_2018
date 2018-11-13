import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/¿Cómo podría ayudar un sistema interactivo a reforzar el recuerdo de los aromas en pacientes con déficit olfativo_.pdf ','title': '¿Como podria ayudar un sistema interactivo a reforzar el recuerdo de los aromas en pacientes con deficit olfativo?', 'name': 'Jennifer Merino Hernández, Zulma J. Hernández Paxtián, María del R. Peralta Calvo, Israel J. Orlando Guerrero'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Aplicación de la Gamificación como Herramienta de Apoyo para el M-Learning sobre el Proceso de Polinización de las Abejas.pdf','title': 'Aplicacion de la Gamificacion como herramienta de apoyo para el M-Learning sobre el proceso de polinizacion de las abejas', 'name': 'Carlos Eduardo Mena Alpuche, Víctor Hugo Menéndez Domínguez, José Chavier De Araujo Freitas, Yolanda Beatriz Moguel Ordóñez, Edith Coello Cervera'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Aplicación Móvil para Recolección de Datos de Árboles usando Crowdsourcing.pdf ','title': 'Aplicacion movil para recoleccion de datos de arboles usando crowdsourcing', 'name':'Franco-Gaona Erick, Avila-Garcia Maria Susana'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Desarrollo de un Análisis Contextual para Mejorar la Usabilidad en Sitios Web_ Caso Práctico Herbario Digital.pdf ','title': 'Desarrollo de un analisis contextual para mejorar la usabilidad en sitios web: Caso practico herbario digital', 'name':'Alma Delia Olmos Pantoja, María del Rosario Peralta Calvo, Zulma Janet Hernández Paxtián, Rocío Rosas López.'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Design of Serious Games to Assist the Reading Comprehension of Technical Texts.pdf ','title': 'Design of serious games to assist the reading comprehesion of technical texts', 'name': 'Juan Carlos Avilés-Díaz, María Susana Avila-Garcia'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Diseño de Interfaces con Tecnología TáctilPara Adultos Mayores.pdf ','title': 'Diseño de interfaces con tecnologia tactil para adultos mayores', 'name':'Aldo Hernández Miguel, Carlos A. Martínez Sandoval, Ma. De Jesús Pérez Álvarez, Neydi Yutzil López Renovato, Ulises Hernández Barrios.'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Diseño de una aplicación móvil con realidad aumentada para coadyuvar en el proceso de aprendizaje matemático.pdf ','title': 'Diseño de una aplicacion movil con realidad aumentada para coadyuvar en el proceso de aprendizaje matematico', 'name':'Eduardo Sosa-Jiménez, José López-Martínez, Victor Chi-Pech, Omar Sosa-Tzec'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Estimating kinetic energy for therapy sessions.pdf ','title': 'Estimating kinetic energy for therapy sessions', 'name':'Alejandro Romero, Raymundo Cornejo, Fernando Martínez, Claudia Barraza, Vania Álvarez'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Extensión de las fronteras del uso de equipos de cómputo_ De pacientes con E.L.A. a personas con Discapacidad Motriz Severa.pdf ','title': 'Extension de las fronteras del uso de equipos de computo: de pacientes con E.L.A. a personas con dispacacidad motriz severa', 'name':'Yasbedh Oswaldo Quiñones Uicab, Víctor Hugo Menéndez Domínguez'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Gamificación para el Aprendizaje de la Apicultura.pdf ','title': 'Gamificacion para el aprendizaje de la apicultura', 'name': 'Luis Gerardo Castillo Pinkus, Víctor Hugo Menéndez Domínguez, José Chavier De Araujo Freitas, Yolanda Beatriz Moguel Ordóñez, Edith Coello Cervera'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Hacia un Sistema Parlante para Personas Ciegas y de baja Visión.pdf ','title': 'Hacia un sistema parlante para personas ciegas y de baja vision', 'name':'Yusmar Alexis Flores Alvarado, Nieves Jiménez Mía, Antonio Arriaga Fierro, María del Rosario Peralta Calvo, Zulma Janet Hernández Paxtián.'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/PaU_ Diseño de Un Exergame en una Superficie ElásticaPara Niños Con Autismo Severo.pdf ','title': 'PaU: Diseño de un exergame en una superficie elastica para niños con autismo severo', 'name': 'Gloria I. Monarca, Arturo Morales-Téllez, Franceli L. Cibrian, Mónica Tentori'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/RouteMe_ unaAplicaciónMóvil para el Uso de Transporte Público en Países en Desarrollo_ Caso de Tijuana.pdf ','title': 'RouteMe: una aplicacion movil para el uso de transporte publico en paises en desarrollo: Caso de Tijuana', 'name': 'Adolfo De la Torre, Jesús Manuel Chaidez Avelar, Lizbeth Escobedo'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Self-Monitoring of Blood Glucose_ The User Experience and Device Interactions of Older Adults with Type 2 Diabetes Mellitus.pdf ','title': 'Self-Monitoring of blood glucose: the user experience and device interactions of older adults with type 2 diabetes mellitus', 'name': 'S. Daphne Prado-Jimenez, Rosa Amelia Rosales-Cinco, Carlos Aceves-Gonzalez, Alexandra R. Lang'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Smart Pens to Assist Fibre Optic Sensors Research_ Evaluating OCR tools.pdf ','title': 'Smart pens to assist fibre optic sensors research: evaluating OCR tools', 'name': 'Anne Dozias*, Cristian Camilo Otalora-Leguizamón, Marco Bianchetti, Maria Susana Avila-Garcia'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/User Experience Delight from the Designer’s Perspective.pdf ','title': "User experience delight from the designer's perspective", 'name': 'Omar Sosa-Tzec'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Posters/Utilización de conceptos de gamificación para reducir la violencia de género contra las mujeres.pdf ','title': 'Utilizacion de conceptos de gamificacion para reducir la violencia de genero contra las mujeres', 'name':'Cuauhtémoc Rivera-Loaiza, Marco A. Nava Aguilar'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private ia: InAppBrowser) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostersPage');
  }

  openPDF(urlTxt){
    let url = encodeURIComponent(urlTxt); 
    this.ia.create('https://docs.google.com/viewer?url=' + url);
  }

}
