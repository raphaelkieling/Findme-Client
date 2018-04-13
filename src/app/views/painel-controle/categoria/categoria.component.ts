import { GraphPolicy } from './../../../domain/policy';
import { Apollo } from 'apollo-angular';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteComponent } from './../../../components/delete/delete.component';
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
  colunas = ['id', 'nome', 'foto','acoes'];

  constructor(
    public categoriaS: CategoriaService,
    public dialog: MatDialog,
    private snack: MatSnackBar,
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.loadCategorias();
  }

  abrirAdicionarModal() {
    const modalCategoriaSalvar = this.dialog.open(CategoriaModalComponent);
  }

  abrirEditarModal(elemento: Categoria) {
    const modalCategoriaEditar = this.dialog.open(CategoriaModalComponent, {
      data: elemento
    });
  }

  abrirDeleteModal(categoria: Categoria) {
    const modalCategoriaDeletar = this.dialog.open(DeleteComponent, {
      data: {
        text: `Categoria ${categoria.nome} vai ser deletada, tem certeza?`,
        fnDel: this.deleteCategoria(categoria.id).bind(this)
      }
    });
  }

  deleteCategoria(id) {
    return () => {
      this.categoriaS.deleteCategoria(id)
        .subscribe((data) => {
          this.snack.open('Categoria deletada com sucesso!', 'Perfeito!', {
            duration: 3000
          });
        },
          err => {
            this.snack.open('Houve um problema ao deletar categoria', 'Aff', {
              duration: 3000
            })
          }
        )
    }
  }

  loadCategorias() {
    this.categoriaS
      .getAll()
      .subscribe(({ data, loading }) => {
        this.loadingCategorias = loading;
        if (!data) return;

        this.categorias = new MatTableDataSource(data.categorias);
      })
  }

  filter(value: string) {
    value = value.trim();
    value = value.toLowerCase();
    this.categorias.filter = value;
  }

}
