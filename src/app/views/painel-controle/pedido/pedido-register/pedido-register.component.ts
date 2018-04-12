import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { PedidoService } from './../../../../services/core/pedido.service';
import { Pedido } from './../../../../domain/pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-register',
  templateUrl: './pedido-register.component.html',
  styleUrls: ['./pedido-register.component.css']
})
export class PedidoRegisterComponent implements OnInit {
  loading: boolean = false;
  objeto: Pedido = new Pedido();
  frasesPedidos = [
    'Pedido enviado, os profissionais vão adorar, só esperar hehe',
    'Que pedido demaaais, vamos ver o que os profissionais vão achar',
    'Parece fácil resolver isso ai em, já já devem estar te chamando :D',
    'Profissionais ativados, já já atacarão o seu problema com TUDO! haha!',
    'Modo problema solucionado ativado!'
  ];

  public datepickerOptions: Pickadate.DateOptions = {
    selectMonths: true,
    selectYears: 15,
    // Título dos botões de navegação
    labelMonthNext: 'Próximo Mês',
    labelMonthPrev: 'Mês Anterior',
    // Título dos seletores de mês e ano
    labelMonthSelect: 'Selecione o Mês',
    labelYearSelect: 'Selecione o Ano',
    // Meses e dias da semana
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    // Letras da semana
    weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    //Botões
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Fechar',
    // Formato da data que aparece no input
    format: 'dd/mm/yyyy',
    formatSubmit: 'yyyy-mm-dd'
  };

  constructor(
    private pedidoService: PedidoService,
    private dialogRef: MatDialogRef<PedidoRegisterComponent>,
    private snack: MatSnackBar
  ) { }

  ngOnInit() { }

  submit() {
    this.pedidoService.criarPedido(this.objeto)
      .subscribe(() => {
        const snack = this.snack.open(this.fraseAleatoriaDePedidos(), 'UHUl!', {
          duration: 3000
        })

        snack.onAction().subscribe(() => {
          snack.dismiss();
        });

        this.dialogRef.close();
      },
        err => {
          const snack = this.snack.open('Aff, desculpe, não foi possível cadastrar seu pedido, tenta mais tarde tá?', 'Ta bem', {
            duration: 5000
          });

          snack.onAction().subscribe(() => {
            snack.dismiss();
          });
        })
  }


  private fraseAleatoriaDePedidos(): string {
    return this.frasesPedidos[Math.floor(Math.random() * this.frasesPedidos.length)];
  }
}
