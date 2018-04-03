import { CategoriaModalComponent } from './categoria-modal/categoria-modal.component';
import { Categoria } from './../../../domain/categoria';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../../../services/core/categoria.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  loadingCategorias: boolean = false;
  categorias: MatTableDataSource<Categoria[]>;
  colunas = ['id', 'nome', 'acoes'];
  modalAdicionar: MatDialogRef<any>;

  constructor(
    public categoriaS: CategoriaService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadCategorias();
  }

  abrirAdicionarModal() {
    this.modalAdicionar = this.dialog.open(CategoriaModalComponent);
    this.modalAdicionar.afterClosed().subscribe(()=>{
      this.loadCategorias();
    })
  }
  


  loadCategorias() {
    this.loadingCategorias = true;
    this.categoriaS
      .getAll()
      .subscribe((res) => {
        this.loadingCategorias = false;
        this.categorias = new MatTableDataSource(res.categorias);
      })
  }

  filter(value: string) {
    value = value.trim();
    value = value.toLowerCase();
    this.categorias.filter = value;
  }

}
