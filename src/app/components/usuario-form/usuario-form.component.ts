import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../domain/usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @Input() objeto: Usuario;
  @Input() edit: boolean = false;
  form: FormGroup;

  constructor(private formB: FormBuilder) {
    this.form = this.buildForm();
  }

  ngOnInit() { }

  buildForm(): FormGroup {
    return this.formB.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

}
