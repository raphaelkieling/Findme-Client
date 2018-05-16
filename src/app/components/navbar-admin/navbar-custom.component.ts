import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-custom.component.html',
  styleUrls: ['./navbar-custom.component.css']
})
export class NavbarCustomComponent implements OnInit {

  constructor(
    public loginS: LoginService,
    private router: Router,
    private authS: AuthService
  ) { }

  ngOnInit() {}
  
  logout() {
    this.router.navigate(['/']);
    this.loginS.logout();
  }

}
