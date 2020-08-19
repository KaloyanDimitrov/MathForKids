import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usernameFormControl = new FormControl();
  passwordFormControl = new FormControl();
  passwordConfirmFormControl = new FormControl();


  constructor() {}

  ngOnInit() {
  }

  register() {

  }

}
