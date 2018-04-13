import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(
    public loginS: LoginService,
    private router: Router,
    private authS: AuthService
  ) { }

  ngOnInit() {
    console.log(this.authS.tokenDecoded)
  }

  logout() {
    this.loginS.logout();
    this.router.navigate(['/']);
  }

}
