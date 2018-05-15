import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPessoalComponent } from './info-pessoal.component';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
  CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexModule
  ],
  declarations: [InfoPessoalComponent],
  exports: [InfoPessoalComponent]
})
export class InfoPessoalModule { }
