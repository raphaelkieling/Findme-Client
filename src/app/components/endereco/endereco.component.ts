import { FormGroup, FormBuilder } from '@angular/forms';
import { Endereco } from './../../domain/endereco';
import { EnderecoService } from './../../services/core/endereco.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() objeto: Endereco;
  form: FormGroup;

  constructor(
    private enderecoService: EnderecoService,
    private formB: FormBuilder,
    private snack:MatSnackBar
  ) {
    this.form = this.buildForm();
    this.listenForm();
  }

  ngOnInit() { }

  listenForm() {
    this.form.valueChanges.subscribe(() => {
    });
  }


  buildForm(): FormGroup {
    return this.formB.group({
      cep: [''],
      bairro: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      cidade: [''],
      estado: ['']
    })
  }

  pegaEnderecoPeloCep(cep: string) {
    this.enderecoService
      .pegaEnderecoPorCEP(cep)
      .subscribe(res => {
        this.objeto.bairro = res['bairro']
        this.objeto.cep = res['cep']
        this.objeto.complemento = res['complemento']
        this.objeto.cidade = res['localidade']
        this.objeto.logradouro = res['logradouro']
        this.objeto.estado = res['uf']
      },
        err => {
          this.snack.open('Não achamos nenhum CEP correspondente :(', 'Aff!', {
            duration: 6000
          });
        })
  }

}
