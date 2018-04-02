import { Endereco } from './../../../domain/endereco';
import { CategoriaService } from './../../../services/core/categoria.service';
import { Categoria } from './../../../domain/categoria';
import { Profissional } from './../../../domain/profissional';
import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../../../services/core/profissional.service';
import { ativarGEOLOCATION } from '../../../utils/geolocation';
@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
  export class CadastroProfissionalComponent implements OnInit {
  profissional: Profissional = new Profissional();
  endereco: Endereco = new Endereco();
  constructor(
    private profissionalS: ProfissionalService
  ) { }

  ngOnInit() {}

  submit() {
    this.profissional.pessoa.enderecos.push(this.endereco);

    this.profissionalS
      .criarProfissional(this.profissional)
      .subscribe(console.log);
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
