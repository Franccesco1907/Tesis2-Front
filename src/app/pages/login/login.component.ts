import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/services/login.service';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private notificationService: ToastrService,
    private tokenStorageService: TokenStorageService
  ) {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      console.log(
        'this.tokenStorageService.getToken()',
        this.tokenStorageService.getToken()
      );
    }
  }

  login() {
    console.log({
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    });
    this.loginService
      .login(
        this.form.controls['email'].value,
        this.form.controls['password'].value
      )
      .subscribe(
        (data: any) => {
          console.log('data', data);

          this.notificationService.success(
            '¡Inicio de sesión exitoso!',
            '¡BIENVENIDO!',
            { positionClass: 'toast-top-center' }
          );

          // this.tokenStorageService.saveToken(data.accessToken);
          this.tokenStorageService.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['home']);

        },
        (e) => {
          console.log('error', e);
          if (e.error) {
            this.notificationService.error(e.error.message, e.error.title, {
              positionClass: 'toast-top-center',
            });
          }
        }
      );
  }
}
