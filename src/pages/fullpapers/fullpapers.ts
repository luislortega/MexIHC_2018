import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the FullpapersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fullpapers',
  templateUrl: 'fullpapers.html',
})
export class FullpapersPage {

  menu_fullpapers = [
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Augmented%20Reality%20User%20interaction%20to%20Computer%20Aided%20%20Orthopedic%20Surgery%20system.pdf','title': 'Augmented Reality User interaction to Computer Aided Orthopedic Surgery system', 'name':'Luis E. Bautista R., Maria Fernanda Maradei G., Gabriel Pedraza F.'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Buenas%20Prácticas%20de%20Usabilidad%20para%20el%20Desarrollo%20de%20los%20Sistemas%20de%20la%20Universidad%20Tecnológica%20de%20la%20Mixteca.pdf ','title': 'Buenas Prácticas de Usabilidad para el Desarrollo de los Sistemas de la Universidad Tecnológica de la Mixteca', 'name':'Carlos A. Martínez Sandoval, Irving Adrian Mondragón Ramírez, Liz Velia Martínez Robles'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Building%20Security%20Bubbles_%20Design%20of%20a%20Wearable%20Device%20for%20%20Child%20Tracking%20in%20Vulnerable%20Zones.pdf','title': 'Building Security Bubbles: Design of a Wearable Device for Child Tracking in Vulnerable Zones', 'name':'Miguel Ángel Ylizaliturri Salcedo, Alberto Gabriel Ramos Salvio, J. Antonio García Macías'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Comparison%20Between%20KLM%20Estimations%20and%20Screen%20Reader%20%20Times%20in%20Non-Visual%20Interaction.pdf','title': 'Comparison Between KLM Estimations and Screen Reader Times in Non-Visual Interaction', 'name':'Silvia B. Fajardo Flores, Laura S. Gaytán Lugo, Pedro C. Santana Mancilla, Miguel A. Rodríguez Ortiz'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Designing%20Interaction%20in%20a%20Speaking%20System%20for%20the%20Blind%20%20and%20Low%20Vision_%20Case%20Study.pdf','title': 'Designing Interaction in a Speaking System for the Blind and Low Vision: Case Study', 'name':'Ramses Mendoza Garcia, Nicolas Sanchez Crispin, Jesus M. Garcia Guevara, Maria del R. Peralta Calvo, Zulma J. Hernandez Paxtian'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Endohaptic_%20virtual%20system%20for%20endodontic%20training%20using%20%20haptic%20devices.pdf','title': 'Endohaptic: virtual system for endodontic training using haptic devices', 'name':'V. G. García Macías, L. A. Hernández Garciía, C. Morales Chavarría, E. Ricárdez Vázquez'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/GuiDance_ Wearable Technology Applied to Guided Dance.pdf','title': 'GuiDance: Wearable Technology Applied to Guided Dance', 'name':'Héctor M. Camarillo Abad, María Gabriela Sandoval, J. Alfredo Sánchez'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Heuristic%20Evaluation%20of%20a%20Gamified%20Application%20for%20%20Education%20in%20Patients%20with%20Diabetes.pdf','title': 'Heuristic Evaluation of a Gamified Application for Education in Patients with Diabetes', 'name':'Andrea S. Arce Jiménez, Norma A. Barón Ramirez, Pedro C. Santana Mancilla, Juan Carlos Meza Romero, Ricardo Acosta Díaz'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Implementation%20and%20evaluation%20of%20the%20Daisy%20Wheel%20for%20text%20%20entry%20on%20touch-free%20interfaces.pdf','title': 'Implementation and evaluation of the Daisy Wheel for text entry on touch-free interfaces', 'name':'Bruno Bardoza Orozco, Aaron Rocha Rocha, Ana Segundo Sevilla'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Including%20Students%20in%20Technological%20Development_%20Production%20and%20Marketing%20of%20Academic%20Projects%20%E2%80%93%20Student%20%20Design%20Competition.pdf','title': 'Including Students in Technological Development: Production and Marketing of Academic Projects – Student Design Competition', 'name':'Carlos A. Martínez Sandoval, María Isabel Hernández Ríos, Salvador Sánchez Silva, Edgar Iván Ramírez Díaz, Natalia Trujillo Monterrosa'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Interactive%20interface%20design%20for%20the%20evaluation%20of%20attention%20%20deficiencies%20in%20preschool%20children.pdf','title': 'Interactive interface design for the evaluation of attention deficiencies in preschool children', 'name':'Alberto Sánchez Morales, Claudia Lizbeth Martínez González, Fanceli L. Cibrian, Monica Tentori'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/KiddyAttack_%20A%20virtual%20reality%20game%20to%20raise%20awareness%20of%20%20children%20with%20cancer%20about%20their%20disease.pdf','title': 'KiddyAttack: A virtual reality game to raise awareness of children with cancer about their disease', 'name':'Arturo Morales Téllez, Gloria I. Monarca, Franceli L. Cibrian, Monica Tentori, Juan González Cabelleros'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Modularity%20is%20the%20Key%20%20A%20New%20Approach%20to%20Social%20Media%20Privacy%20Policies.pdf','title': 'Modularity is the Key A New Approach to Social Media Privacy Policies', 'name':'Sanchari Das Indiana University Bloomington, Jayati Dev Indiana University Bloomington, Kaushik Srinivasan Indiana University Bloomington'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/RehWave_%20A%20Real-Time%20Tele-Rehabilitation%20Haptic%20Device%20for%20%20Massage%20Therapy.pdf','title': 'RehWave: A Real-Time Tele-Rehabilitation Haptic Device for Massage Therapy', 'name':'Cristina Ramírez Fernández, Ismael Hernández Capuchin, Marlen Meza Sánchez, Eddie Clemente Noarso Dardín Pérez López, Eduardo Albundiz, Josefina Campos García'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Towards a New Hybrid Usability Methodology_ Analysis through Eye-tracking and Survey Techniques.pdf ','title': 'Towards a New Hybrid Usability Methodology: Analysis through Eye-tracking and Survey Techniques', 'name':'Victor Flores Sánchez, Luis Collado Martínez, Francisco López Orozco'},
    {'url': 'http://convivenciaescolaryucatan.com.mx/php/pdfs/Papers/Towards an Adaptive Conversational Robot using Biosignals.pdf ','title': 'Towards an Adaptive Conversational Robot using Biosignals', 'name':'Dagoberto Cruz Sandoval, Jesus Favela, Mario Parra, Netzahualcoyotl Hernandez'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ia: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullpapersPage');
  }

  openPDF(urlTxt){
    let url = encodeURIComponent(urlTxt); 
    this.ia.create('https://docs.google.com/viewer?url=' + url);
  }

}
