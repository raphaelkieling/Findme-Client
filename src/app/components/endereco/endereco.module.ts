import { EnderecoService } from './../../services/core/endereco.service';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoComponent } from './endereco.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [EnderecoComponent],
  exports: [EnderecoComponent],
  providers: [EnderecoService]
})
export class EnderecoModule { }
