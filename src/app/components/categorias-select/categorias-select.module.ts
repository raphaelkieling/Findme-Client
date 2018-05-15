import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PreloaderModule } from './../preloader/preloader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasSelectComponent } from './categorias-select.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    PreloaderModule,
    MatSnackBarModule,
    MatDialogModule,
    FlexModule,
    MatCardModule
  ],
  declarations: [CategoriasSelectComponent],
  exports: [CategoriasSelectComponent]
})
export class CategoriasSelectModule { }
