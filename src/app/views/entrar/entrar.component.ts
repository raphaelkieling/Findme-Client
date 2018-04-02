import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private loginS: LoginService,
    private formB: FormBuilder,
    private authS: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formB.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  submit() {
    this.loading = true;
    this.loginS.login(this.form.value).subscribe((res) => {
      this.loading = false;
      this.authS.token = res.data.createToken.token;
      this.router.navigate(['painel-controle']);
    }, err => {
      console.log('Não foi possível fazer login');
      this.loading = false;
    });
  }

}
