import { EnderecoService } from './../../services/core/endereco.service';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoComponent } from './endereco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
  CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FlexModule
  ],
  declarations: [EnderecoComponent],
  exports: [EnderecoComponent],
  providers: [EnderecoService]
})
export class EnderecoModule { }
