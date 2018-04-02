import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(
    public loginS: LoginService,
    private router: Router
  ) { }

  ngOnInit() { }

  logout() {
    this.loginS.logout();
    this.router.navigate(['/']);
  }

}
