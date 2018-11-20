import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  speakers = [
    {name: "Saiph Savage", img: "http://www.mexihc.org/2018/images/saiph.jpg"},
    {name: "Beverly May", img: "http://www.mexihc.org/2018/images/beverly.jpg"},
    {name: "Luis Alberto Muñoz Ubando", img: "http://www.mexihc.org/2018/images/alberto.jpeg"}
  ]

  constructor() {

  }

}
