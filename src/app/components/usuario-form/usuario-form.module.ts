import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [UsuarioFormComponent],
  exports: [UsuarioFormComponent]
})
export class UsuarioFormModule { }