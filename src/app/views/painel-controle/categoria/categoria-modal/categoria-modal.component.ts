import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from './../../../../services/core/categoria.service';
import { Categoria } from './../../../../domain/categoria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.css']
})
export class CategoriaModalComponent implements OnInit {
  objeto: Categoria = new Categoria();

  constructor(
    private categoriaS: CategoriaService,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<CategoriaModalComponent>
  ) { }

  ngOnInit() { }

  submit() {
    this.categoriaS
      .createCategoria(this.objeto)
      .subscribe((res) => {
        const snack = this.snack.open('Categoria cadastrada com sucesso!', 'Uhul!', {
          duration: 3000
        })
        this.dialogRef.close();

      }
        , err => {
          this.snack.open('Houve um problema ao cadastrar a categoria!', 'Tentar novamente!');
        })
  }

}
