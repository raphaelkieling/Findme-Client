import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPessoalComponent } from './info-pessoal.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [InfoPessoalComponent],
  exports: [InfoPessoalComponent]
})
export class InfoPessoalModule { }
