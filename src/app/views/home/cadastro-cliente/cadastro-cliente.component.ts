import { Endereco } from './../../../domain/endereco';
import { Cliente } from './../../../domain/cliente';
import { Component, OnInit } from '@angular/core';
import { ativarGEOLOCATION } from '../../../utils/geolocation';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente = new Cliente();
  endereco = new Endereco();

  constructor() { }

  ngOnInit() {}

  submit() {
    // this.cliente.pessoa.enderecos.push(this.endereco);

    // this.cliente
    //   .criarCliente(this.cliente)
    //   .subscribe(console.log);
  }

  ativarGEO() {
    ativarGEOLOCATION(
      (position) => {
        this.endereco.latitude = position.coords.latitude;
        this.endereco.longitude = position.coords.longitude;

        this.submit();
      },
      (err) => {
        console.log(err);
      });
  }

}
