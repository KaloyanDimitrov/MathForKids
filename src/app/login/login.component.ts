import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { abort } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameFormControl = new FormControl();
  passwordFormControl = new FormControl();

  constructor(
    private router: Router,
    private settingsService: SettingsService,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
  }

  login() {
    const username = this.usernameFormControl.value;
    const password = this.passwordFormControl.value;

    this.httpClient.post('http://localhost:8000/login', {
      username: username,
      password: password
    }).pipe(
      catchError(error => {
        console.error(error.error.message);
        alert(error.error.message);
        return of(error);
      })).subscribe(response => {
        if (response && response.error && !response.error.success) {
          return;
        }

        this.settingsService.isLoggedIn.next(true);
        this.router.navigate(['play']);
      });
  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
