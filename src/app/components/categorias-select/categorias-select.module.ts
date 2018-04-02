import { PreloaderModule } from './../preloader/preloader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasSelectComponent } from './categorias-select.component';

@NgModule({
  imports: [
    CommonModule,
    PreloaderModule
  ],
  declarations: [CategoriasSelectComponent],
  exports: [CategoriasSelectComponent]
})
export class CategoriasSelectModule { }
