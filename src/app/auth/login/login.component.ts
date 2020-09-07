import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('madhurachar2@gmail.com', [Validators.required]),
      password: new FormControl('123456', [Validators.required])
    })
  }

  login() {
    const val = this.loginForm.getRawValue();
    this.authService.login(val.email, val.password).subscribe(resp => {
      if(resp.email) {
        this.router.navigateByUrl('/courses');
      }else {
        console.log(resp['error'])
      }
    });
  }

}
