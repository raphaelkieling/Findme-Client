import { Endereco } from './../../../domain/endereco';
import { CategoriaService } from './../../../services/core/categoria.service';
import { Categoria } from './../../../domain/categoria';
import { Profissional } from './../../../domain/profissional';
import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../../../services/core/profissional.service';
import { ativarGEOLOCATION } from '../../../utils/utils';
@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements OnInit {
  profissional: Profissional = new Profissional();
  endereco: Endereco = new Endereco();
  // Categorias
  categorias: Categoria[] = [];
  loadingCategorias = false;

  constructor(
    public categoriaS: CategoriaService,
    private profissionalS: ProfissionalService
  ) { }

  ngOnInit() {
    this.loadCategorias();
  }

  loadCategorias() {
    this.loadingCategorias = true;
    this.categoriaS.getAll().subscribe((res) => {
      this.loadingCategorias = false;
      this.categorias = res.categorias;
    })
  }

  estaSelecionado(id) {
    return this.profissional.pessoa.categorias.filter(idCategoria => idCategoria === id).length > 0;
  }

  selecionarCategoria(id) {
    if (this.profissional.pessoa.categorias.includes(id)) {
      this.profissional.pessoa.categorias = this.profissional.pessoa.categorias.filter(idCategoria => idCategoria !== id);
    } else {
      this.profissional.pessoa.categorias.push(id);
    }
  }

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
