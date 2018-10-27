import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompetitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-competition',
  templateUrl: 'competition.html',
})
export class CompetitionPage {

  menu_competition = [
    {'title': 'Kuali: Distribuyendo comida por un bien', 'name':'Julieta Navarro Rivera, Erika Yunuen Torres Torres, Giovanny Alfonso Chávez Ceniceros, & Raymundo Cornejo'},
    {'title': 'HELPi: Diseño de una herramienta para entregar en el lugar apoyo al indigente', 'name':'Alain Diaz-Montes, Carlos G. Verdin, Carlos A. Puga, Ricardo Rodríguez-Torres, Marcela D. Rodríguez'},
    {'title': 'HIPO: Aplicacion multiplataforma para el apoyo del aprendizaje de habilidades matematicas dirigida a personas con dispacacidad intelectual', 'name': 'Abies C. Durán L., Mario A. Marín B., Karla N. Rocha R., Julián Cárdenas P., Aída L. González L.'},
    {'title': 'Kandii Puzzle: Rompecabezas interactivo para apoyar dispacidad intelectual', 'name': 'David May, Diana Arias, Lorena Baez, Miguel Angel Rivera, Rafael Luna'},
    {'title': 'Tisekuae Xuta Xtaya: Ayuda a las personas sordas', 'name': 'Eduardo Armas García, Rafael Cano Martínez,Víctor Hernández Vásquez, Luis C. Mota Carrera, María del Rosario Peralta Calvo'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionPage');
  }

}
