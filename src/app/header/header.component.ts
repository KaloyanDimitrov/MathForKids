import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  currentRoute: string;

  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settingsService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((navEnd: NavigationEnd) => {
      this.currentRoute = navEnd.url.split('/')[1];
    });
  }

  logOut() {
    this.settingsService.isLoggedIn.next(false);
    this.router.navigate(['login']);
  }

  goTo(route: string) {
    this.router.navigate([`${route}`]);
  }
}
