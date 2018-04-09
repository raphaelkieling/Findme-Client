import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PreloaderModule } from './../preloader/preloader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasSelectComponent } from './categorias-select.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    PreloaderModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  declarations: [CategoriasSelectComponent],
  exports: [CategoriasSelectComponent]
})
export class CategoriasSelectModule { }
