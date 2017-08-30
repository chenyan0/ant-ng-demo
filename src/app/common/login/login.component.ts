import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.less']
})

export class LoginComponent implements OnInit {
  config={"ballSize": 1,"speed": 1.1,"phaseRefX": 0.12,"phaseRefY": 0.12,"radiusX": 5,"radiusY": 17,"densityX": 4,"densityY": 4,"backgroundFrom": "#3d34a5","backgroundTo": "#221547","degree": 62,"ballColor": "#9085d6"}

  loginForm: FormGroup;
  model: any = { username: '', password: '' };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    wavie('lg-bg', this.config)   
    this.loginForm = this.fb.group({
      userName: [ '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ],
      remember: [ true ],
    });
  }
  submitForm() {
    // for (const i in this.loginForm.controls) {
    //   this.loginForm.controls[ i ].markAsDirty();
    // }
   this.router.navigate(['/']); 
  }
  // onClick(event:any){
  //   console.log(event);
  //    event.stopPropagation();
  // }
}