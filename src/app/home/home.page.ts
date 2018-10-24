import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  private menu_cards = [
    {'nombre' : "FULL AND SHORT PAPERS", 'url' : "/papers"},
    {'nombre' : "GRADUATE COLLOQUIUM", 'url' : "/colloquium"},
    {'nombre' : "STUDENTS DESIGN COMPETITION", 'url' : "/competition"},
    {'nombre' : "POSTERS", 'url' : "/posters"}
  ];

  constructor(private router: Router){}

  openPage(url : UrlTree):void{
    this.router.navigateByUrl(url);
  }
}
