import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('Header component is created!');
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }

  goTo(route: string) {
    this.router.navigate([`${route}`]);
  }
}
