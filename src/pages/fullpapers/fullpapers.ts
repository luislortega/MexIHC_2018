import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    {'title': 'Augmented Reality User interaction to Computer Aided Orthopedic Surgery system', 'name':'Luis E. Bautista R., Maria Fernanda Maradei G., Gabriel Pedraza F.'},
    {'title': 'Buenas Prácticas de Usabilidad para el Desarrollo de los Sistemas de la Universidad Tecnológica de la Mixteca', 'name':'Carlos A. Martínez Sandoval, Irving Adrian Mondragón Ramírez, Liz Velia Martínez Robles'},
    {'title': 'Building Security Bubbles: Design of a Wearable Device for Child Tracking in Vulnerable Zones', 'name':'Miguel Ángel Ylizaliturri Salcedo, Alberto Gabriel Ramos Salvio, J. Antonio García Macías'},
    {'title': 'Comparison Between KLM Estimations and Screen Reader Times in Non-Visual Interaction', 'name':'Silvia B. Fajardo Flores, Laura S. Gaytán Lugo, Pedro C. Santana Mancilla, Miguel A. Rodríguez Ortiz'},
    {'title': 'Designing Interaction in a Speaking System for the Blind and Low Vision: Case Study', 'name':'Ramses Mendoza Garcia, Nicolas Sanchez Crispin, Jesus M. Garcia Guevara, Maria del R. Peralta Calvo, Zulma J. Hernandez Paxtian'},
    {'title': 'Endohaptic: virtual system for endodontic training using haptic devices', 'name':'V. G. García Macías, L. A. Hernández Garciía, C. Morales Chavarría, E. Ricárdez Vázquez'},
    {'title': 'GuiDance: Wearable Technology Applied to Guided Dance', 'name':'Héctor M. Camarillo Abad, María Gabriela Sandoval, J. Alfredo Sánchez'},
    {'title': 'Heuristic Evaluation of a Gamified Application for Education in Patients with Diabetes', 'name':'Andrea S. Arce Jiménez, Norma A. Barón Ramirez, Pedro C. Santana Mancilla, Juan Carlos Meza Romero, Ricardo Acosta Díaz'},
    {'title': 'Implementation and evaluation of the Daisy Wheel for text entry on touch-free interfaces', 'name':'Bruno Bardoza Orozco, Aaron Rocha Rocha, Ana Segundo Sevilla'},
    {'title': 'Including Students in Technological Development: Production and Marketing of Academic Projects – Student Design Competition', 'name':'Carlos A. Martínez Sandoval, María Isabel Hernández Ríos, Salvador Sánchez Silva, Edgar Iván Ramírez Díaz, Natalia Trujillo Monterrosa'},
    {'title': 'Interactive interface design for the evaluation of attention deficiencies in preschool children', 'name':'Alberto Sánchez Morales, Claudia Lizbeth Martínez González, Fanceli L. Cibrian, Monica Tentori'},
    {'title': 'KiddyAttack: A virtual reality game to raise awareness of children with cancer about their disease', 'name':'Arturo Morales Téllez, Gloria I. Monarca, Franceli L. Cibrian, Monica Tentori, Juan González Cabelleros'},
    {'title': 'Modularity is the Key A New Approach to Social Media Privacy Policies', 'name':'Sanchari Das Indiana University Bloomington, Jayati Dev Indiana University Bloomington, Kaushik Srinivasan Indiana University Bloomington'},
    {'title': 'RehWave: A Real-Time Tele-Rehabilitation Haptic Device for Massage Therapy', 'name':'Cristina Ramírez Fernández, Ismael Hernández Capuchin, Marlen Meza Sánchez, Eddie Clemente Noarso Dardín Pérez López, Eduardo Albundiz, Josefina Campos García'},
    {'title': 'Towards a New Hybrid Usability Methodology: Analysis through Eye-tracking and Survey Techniques', 'name':'Victor Flores Sánchez, Luis Collado Martínez, Francisco López Orozco'},
    {'title': 'Towards an Adaptive Conversational Robot using Biosignals', 'name':'Dagoberto Cruz Sandoval, Jesus Favela, Mario Parra, Netzahualcoyotl Hernandez'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullpapersPage');
  }

}
