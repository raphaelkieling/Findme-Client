import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoModalComponent } from './orcamento-modal/orcamento-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrcamentoModalComponent],
  exports: [OrcamentoModalComponent]
})
export class OrcamentoModule { }
