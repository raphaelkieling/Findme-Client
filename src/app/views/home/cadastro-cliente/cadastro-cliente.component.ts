import { ClienteService } from './../../../services/core/cliente.service';
import { Endereco } from './../../../domain/endereco';
import { Cliente } from './../../../domain/cliente';
import { Component, OnInit } from '@angular/core';
import { ativarGEOLOCATION } from '../../../utils/geolocation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente = new Cliente();
  endereco = new Endereco();

  constructor(
    private clienteService:ClienteService,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {}

  submit() {
    this.cliente.pessoa.enderecos.push(this.endereco);

    this.clienteService
      .criarCliente(this.cliente)
      .subscribe(() => {
        this.snack.open('O cadastro ficou demais, que tal entrar agora?', 'SIM!', {
          duration: 6000
        });

        this.router.navigate(['/entrar']);
      },
        err => {
          this.snack.open('Houve um problema no cadastro, tente novamente mais tarde', 'Tentar Novamente!', {
            duration: 3000
          });
        });
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
