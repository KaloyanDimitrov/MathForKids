import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameFormControl: FormControl;
  passwordFormControl: FormControl;


  constructor(
    private router: Router
  ) {
    this.usernameFormControl = new FormControl();
    this.passwordFormControl = new FormControl();
  }

  ngOnInit() {
  }

  login() {
    console.log(this.usernameFormControl.value);
    console.log(this.passwordFormControl.value);
    this.router.navigate(['play']);
  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
