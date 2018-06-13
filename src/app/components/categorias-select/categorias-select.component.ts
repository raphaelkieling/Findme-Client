import { Profissional } from './../../domain/profissional';
import { CategoriaService } from './../../services/core/categoria.service';
import { Categoria } from './../../domain/categoria';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categorias-select',
  templateUrl: './categorias-select.component.html',
  styleUrls: ['./categorias-select.component.css']
})
export class CategoriasSelectComponent implements OnInit {

  categorias: Categoria[] = [];
  loadingCategorias = false;

  // Serve para retirar ou colocar uma categoria nesta pessoa pelo graphql
  @Input() pessoaId;
  @Input('preselects') categoriasSelecionadas: string[] = [];
  // Retorna APENAS um 
  @Input() apenasUm = false;
  @Output() selecteds = new EventEmitter<string[]>();

  constructor(
    public categoriaS: CategoriaService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadCategorias();
  }

  loadCategorias() {
    this.categoriaS
      .getAll()
      .subscribe(({ data, loading }) => {
        this.loadingCategorias = loading;
        if (!data) return;

        this.categorias = data.categorias;
      })
  }

  estaSelecionado(id) {
    return this.categoriasSelecionadas.filter(categoriaId => categoriaId === id).length > 0;
  }

  selecionarCategoria(id) {
    if (this.apenasUm) {
      this.categoriasSelecionadas = [];
    }

    if (this.estaSelecionado(id)) {
      if (this.pessoaId) {
        this.retiraCategoriaDaPessoa(id);
      }

      this.retiraCategoriaDaListagem(id);
    } else {
      if (this.pessoaId) {
        this.adicionaCategoriaNaPessoa(id);
      }

      this.adicionaCategoriaNaListagem(id);
    }
    this.selecteds.emit(this.categoriasSelecionadas);
  }


  public adicionaCategoriaNaListagem(id: any) {
    this.categoriasSelecionadas.push(id);
  }

  public retiraCategoriaDaListagem(id: any) {
    this.categoriasSelecionadas = this.categoriasSelecionadas.filter(categoriaId => categoriaId !== id);
  }

  private adicionaCategoriaNaPessoa(idCategoria: any) {
    this.categoriaS
      .adicionaCategoriaPessoa(idCategoria, this.pessoaId)
      .subscribe(res => {
        this.snack.open('Categoria adicionada com sucesso, sai da conta para surtir efeito nas notifcações!', 'Uhul!', {
          duration: 3000
        });
      }, err => {
        this.snack.open('Problema ao adicionar categora, tenta mais tarde!', 'Aff', {
          duration: 3000
        });

        this.retiraCategoriaDaListagem(idCategoria);
      });
  }

  private retiraCategoriaDaPessoa(idCategoria: any) {
    this.categoriaS
      .retiraCategoriaPessoa(idCategoria, this.pessoaId)
      .subscribe(res => {
        this.snack.open('Categoria retirada com sucesso, sai da conta para surtir efeito nas notifcações!', 'Uhul!', {
          duration: 3000
        });
      }, err => {
        this.snack.open('Problema ao retirar categora, tenta mais tarde!', 'Aff', {
          duration: 3000
        });

        this.adicionaCategoriaNaListagem(idCategoria);
      });
  }
}
