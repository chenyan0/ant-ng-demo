import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { UserApi } from "app/service/api";
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.less']
})

export class LoginComponent implements OnInit {
  config = {"ballSize":2.2,"speed":-0.9,"phaseRefX":-0.14,"phaseRefY":-0.363,"radiusX":82,"radiusY":0,"densityX":4.5,"densityY":2.5,"backgroundFrom":"#3d34a5","backgroundTo":"#221547","degree":62,"ballColor":"#9791bc"}
  submitted: boolean = false;
  loginForm: FormGroup;
  model: any = { username: '', password: '' };

  constructor(
    private api: UserApi,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    wavie('lg-bg', this.config)
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true],
    });
  }
  submitForm() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
    }
    if (this.loginForm.valid) {
      this.submitted = true;
      this.api.login(this.loginForm.value).subscribe(d => {
        if (d) {
          let error;
          // 显示错误信息
          if (error) {
            // this.nns.error('错误', error);
          } else {
            // 登录成功
            this.router.navigate(['/']);
          }

        }
        this.submitted = false;
      }, () => { this.submitted = false; });
    }
  }
}