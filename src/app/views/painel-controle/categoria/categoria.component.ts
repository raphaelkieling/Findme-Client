import { Categoria } from './../../../domain/categoria';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/core/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  loadingCategorias: boolean = false;
  categorias: Categoria[] = []

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

}
