import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from './../../domain/pessoa';
import { Usuario } from './../../domain/usuario';
import { Component, OnInit, Input, EventEmitter, Output, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-info-pessoal',
  templateUrl: './info-pessoal.component.html',
  styleUrls: ['./info-pessoal.component.css']
})
export class InfoPessoalComponent {

  @Input() objeto: Pessoa;
  form: FormGroup;

  constructor(private formB: FormBuilder) {
    this.form = this.buildForm();
    this.listenForm();
  }

  listenForm() {
    this.form.valueChanges.subscribe(() => {
    })
  }

  buildForm(): FormGroup {
    return this.formB.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      nascimento: [],
      cpf: ['', Validators.required],
      cnpj: [],
      telefone: [],
      observacao: ['', Validators.required]
    })
  }
}
