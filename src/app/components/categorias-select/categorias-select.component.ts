import { Profissional } from './../../domain/profissional';
import { CategoriaService } from './../../services/core/categoria.service';
import { Categoria } from './../../domain/categoria';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categorias-select',
  templateUrl: './categorias-select.component.html',
  styleUrls: ['./categorias-select.component.css']
})
export class CategoriasSelectComponent implements OnInit {

  categorias: Categoria[] = [];
  loadingCategorias = false;
  categoriasSelecionadas: Categoria[] = []
  @Output() selecteds = new EventEmitter<Categoria[]>();

  constructor(
    public categoriaS: CategoriaService
  ) { }

  ngOnInit() {
    this.loadCategorias();
  }

  loadCategorias() {
    this.loadingCategorias = true;
    this.categoriaS
      .getAll()
      .subscribe((res) => {
        this.loadingCategorias = false;
        this.categorias = res.categorias;
      })
  }

  estaSelecionado(id) {
    return this.categoriasSelecionadas.filter(idCategoria => idCategoria === id).length > 0;
  }

  selecionarCategoria(id) {
    if (this.categoriasSelecionadas.includes(id)) {
      this.categoriasSelecionadas = this.categoriasSelecionadas.filter(idCategoria => idCategoria !== id);
    } else {
      this.categoriasSelecionadas.push(id);
    }

    this.selecteds.emit(this.categoriasSelecionadas);
  }

}
