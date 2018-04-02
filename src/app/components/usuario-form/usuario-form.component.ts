import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../domain/usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @Input() objeto: Usuario;
  constructor() { }

  ngOnInit() {
  }

}
