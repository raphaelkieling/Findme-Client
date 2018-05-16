import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    MatInputModule
  ],
  declarations: [UsuarioFormComponent],
  exports: [UsuarioFormComponent]
})
export class UsuarioFormModule { }
