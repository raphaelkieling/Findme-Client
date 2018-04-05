import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from './../../../../services/core/categoria.service';
import { Categoria } from './../../../../domain/categoria';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.css']
})
export class CategoriaModalComponent implements OnInit {
  objeto: Categoria = new Categoria();
  loading: boolean = false;

  constructor(
    private categoriaS: CategoriaService,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<CategoriaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) this.objeto = JSON.parse(JSON.stringify(this.data));
  }

  ngOnInit() { }

  submit() {
    this.loading = true;
    if (this.objeto.id) {
      this.editar(this.objeto);
      return;
    }

    this.cadastrar(this.objeto)
  }

  editar(elemento) {
    this.categoriaS
      .editarCategoria(elemento)
      .subscribe((res) => {
        const snack = this.snack.open('Categoria editada com sucesso!', 'Uhul!', {
          duration: 3000
        })
        this.dialogRef.close();
        this.loading = false;
      }
        , err => {
          this.snack.open('Houve um problema ao editar a categoria!', 'Tentar novamente!');
          this.loading = false;
        })
  }

  cadastrar(elemento) {
    this.categoriaS
      .createCategoria(elemento)
      .subscribe((res) => {
        const snack = this.snack.open('Categoria cadastrada com sucesso!', 'Uhul!', {
          duration: 3000
        })
        this.dialogRef.close();
        this.loading = false;
      }
        , err => {
          this.snack.open('Houve um problema ao cadastrar a categoria!', 'Tentar novamente!');
          this.loading = false;
        })
  }

}
