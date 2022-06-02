import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {

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
