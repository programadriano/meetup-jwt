import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  login() {
    const val = this.form.value;

    let user = {
      username: val.email,
      password: val.password
    };
   
    if (user.username && user.password) {
      this.loginService.login(user)
        .subscribe((data: any) => {
          localStorage["token"] = data.token;
          this.router.navigateByUrl('/');
        });
    }
  }

}
