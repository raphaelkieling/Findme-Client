import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService as AuthServiceFindme } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent {
  form: FormGroup;
  loading = false;
  salvar = false;
  hide = true;

  constructor(
    private loginS: LoginService,
    private formB: FormBuilder,
    private authS: AuthServiceFindme,
    private router: Router,
    private snack: MatSnackBar,
    private fbAuth: AngularFireAuth
  ) {
    this.buildForm();
    this.salvar = this.checkSalvar();
  }

  ngOnInit() {
    
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider()
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  twitterLogin(){
    const provider = new firebase.auth.TwitterAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.fbAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        console.log(credential);
      })
      .catch(error => console.log(error));
  }

  checkSalvar(): boolean {
    return !!this.getSalvo();
  }

  getSalvo() {
    return localStorage.getItem('__username__');
  }

  buildForm() {
    this.form = this.formB.group({
      usuario: [this.getSalvo(), Validators.required],
      senha: ['', Validators.required],
      salvar: ['']
    })
  }

  submit() {
    if (this.salvar) {
      localStorage.setItem('__username__', this.form.get('usuario').value);
    }

    this.loading = true;

    this.loginS.login(this.form.value).subscribe((res) => {
      this.loading = false;
      this.authS.token = res.data.createToken.token;
      this.router.navigate(['painel-controle']);
    }, err => {
      console.dir(err);
      this.snack.open('Usuário ou senha incorretas', 'Tranquilo!');
      this.loading = false;
    });
  }

}
