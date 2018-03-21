import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @Input() objeto: any;
  constructor() { }

  ngOnInit() {
  }

}
