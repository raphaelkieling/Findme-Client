import { Component, OnInit, Inject } from '@angular/core';
import { OrcamentoPedidoService } from '../../../services/core/orcamentoPedido.service';
import { OrcamentoPedido } from '../../../domain/orcamentoPedido';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

interface data {
  cliente: string;
  pedido: string;
  criaMensagemDeConclusao: Function
}
@Component({
  selector: 'app-orcamento-modal',
  templateUrl: './orcamento-modal.component.html',
  styleUrls: ['./orcamento-modal.component.css']
})
export class OrcamentoModalComponent implements OnInit {
  loading = false;

  constructor(
    private orcamentoService: OrcamentoPedidoService,
    private dialogRef: MatDialogRef<OrcamentoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: data
  ) { }

  ngOnInit() {
  }

  criarOrcamento() {
    let orcamento = new OrcamentoPedido();
    orcamento.cliente = this.data.cliente;
    orcamento.pedido = this.data.pedido;

    this.loading = true;
    this.orcamentoService
      .criarOrcamentoPedido(orcamento)
      .subscribe(res => {
        this.loading = false;
        this.data.criaMensagemDeConclusao('Te mandei um orçamento! Qualquer coisa só chamar!')
        this.fechar();
      })
  }

  fechar() {
    this.dialogRef.close()
  }
}
