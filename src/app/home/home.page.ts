import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  private menu_cards = [
    {'title' : "FULL AND SHORT PAPERS", 'url' : "/papers"},
    {'title' : "GRADUATE COLLOQUIUM", 'url' : "/colloquium"},
    {'title' : "STUDENTS DESIGN COMPETITION", 'url' : "/competition"},
    {'title' : "POSTERS", 'url' : "/posters"}
  ];

  constructor(private router: Router){}

  openPage(url : UrlTree):void{
    this.router.navigateByUrl(url);
  }
}
