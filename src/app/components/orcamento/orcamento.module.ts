import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoModalComponent } from './orcamento-modal/orcamento-modal.component';
import { OrcamentoPedidoService } from '../../services/core/orcamentoPedido.service';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  declarations: [OrcamentoModalComponent],
  exports: [OrcamentoModalComponent],
  providers: [OrcamentoPedidoService]
})
export class OrcamentoModule { }
