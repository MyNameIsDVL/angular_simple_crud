import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Routing } from 'src/app/app.enum';

@Component({
  selector: 'app-nav-controler',
  templateUrl: './nav.controler.html',
  styleUrls: ['./nav.controler.css']
})
export class NavControler implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Strona główna',
        routerLink: Routing.home
      },
      {
        label: 'Lista studentów',
        routerLink: Routing.students
      }
  ];
  }

}
