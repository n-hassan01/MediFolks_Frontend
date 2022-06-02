import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  subjects = [
    'Heart',
    'Kidney',
    'ENT',
    'Dental',
    'Medicine',
    'Eye',
    'Gyne',
    'Nutrition',
    'Rheumatology',
    'Diabetese',
    'Orthopedics',
    'Neurology',
    'Psychiatry'

  ]

  hide = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
