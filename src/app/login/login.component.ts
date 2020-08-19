import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

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
    private settingsService: SettingsService
  ) {
  }

  ngOnInit() {
  }

  login() {
    console.log(this.usernameFormControl.value);
    console.log(this.passwordFormControl.value);
    this.settingsService.isLoggedIn.next(true);
    this.router.navigate(['play']);
  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
