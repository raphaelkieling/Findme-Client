import { Router } from '@angular/router';
import { Endereco } from './../../../domain/endereco';
import { CategoriaService } from './../../../services/core/categoria.service';
import { Categoria } from './../../../domain/categoria';
import { Profissional } from './../../../domain/profissional';
import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../../../services/core/profissional.service';
import { ativarGEOLOCATION } from '../../../utils/geolocation';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements OnInit {
  profissional: Profissional = new Profissional();
  endereco: Endereco = new Endereco();
  constructor(
    private profissionalS: ProfissionalService,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() { }

  submit() {
    this.profissional.pessoa.enderecos.push(this.endereco);

    this.profissionalS
      .criarProfissional(this.profissional)
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
