import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService } from '../services/settings.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { abort } from 'process';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usernameFormControl = new FormControl();
  passwordFormControl = new FormControl();
  passwordConfirmFormControl = new FormControl();


  constructor(
    private settingsService: SettingsService,
    private router: Router,
    private httpClient: HttpClient) {}

  ngOnInit() {
  }

  register() {
    const username = this.usernameFormControl.value;
    const password = this.passwordFormControl.value;
    const passwordConfirm = this.passwordConfirmFormControl.value;

    if (password !== passwordConfirm) {
      alert('The confirm password must be the same');
      return;
    }

    this.httpClient.post('http://localhost:8000/register', {
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

}
