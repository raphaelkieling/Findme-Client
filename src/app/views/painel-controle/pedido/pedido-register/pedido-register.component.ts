import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PedidoService } from './../../../../services/core/pedido.service';
import { Pedido } from './../../../../domain/pedido';
import { Component, OnInit, Input, Inject } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-pedido-register',
  templateUrl: './pedido-register.component.html',
  styleUrls: ['./pedido-register.component.css']
})
export class PedidoRegisterComponent implements OnInit {
  loading: boolean = false;
  @Input() objeto: Pedido = new Pedido();
  frasesPedidos = [
    'Pedido enviado, os profissionais vão adorar, só esperar hehe',
    'Que pedido demaaais, vamos ver o que os profissionais vão achar',
    'Parece fácil resolver isso ai em, já já devem estar te chamando :D',
    'Profissionais ativados, já já atacarão o seu problema com TUDO! haha!',
    'Modo problema solucionado ativado!'
  ];

  constructor(
    private pedidoService: PedidoService,
    private dialogRef: MatDialogRef<PedidoRegisterComponent>,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(!this.data.pedido){
      return;
    }
    this.objeto = Object.assign({}, this.data.pedido, {
      categoriaId: this.data.pedido.categoria.id
    })
  }

  ngOnInit() { }

  submit() {
    console.log(this.objeto)
    this.loading = true;
    if (this.objeto.id) {
      this.editar();
    } else {
      this.cadastrar();
    }
  }


  setCategoria(categoria) {
    this.objeto.categoriaId = categoria;
  }

  cadastrar() {
    this.pedidoService.criarPedido(this.objeto)
      .subscribe(() => {
        this.loading = false
        const snack = this.snack.open(this.fraseAleatoriaDePedidos(), 'UHUl!', {
          duration: 3000
        })

        snack.onAction().subscribe(() => {
          snack.dismiss();
        });

        this.dialogRef.close();
      },
        err => {
          this.loading = false
          const snack = this.snack.open('Aff, desculpe, não foi possível cadastrar seu pedido, tenta mais tarde tá?', 'Ta bem', {
            duration: 5000
          });

          snack.onAction().subscribe(() => {
            snack.dismiss();
          });
        })
  }

  editar() {
    this.pedidoService.editarPedido(this.objeto)
      .subscribe(() => {
        this.loading = false
        const snack = this.snack.open('Editado com sucesso!', 'UHUl!', {
          duration: 3000
        })

        snack.onAction().subscribe(() => {
          snack.dismiss();
        });

        this.dialogRef.close();
      },
        err => {
          this.loading = false
          const snack = this.snack.open('Aff, desculpe, não foi possível editar seu pedido, tenta mais tarde tá?', 'Ta bem', {
            duration: 5000
          });

          snack.onAction().subscribe(() => {
            snack.dismiss();
          });
        })
  }

  setDate(data) {
    return moment(data).format('DD/MM/YYYY');
  }


  private fraseAleatoriaDePedidos(): string {
    return this.frasesPedidos[Math.floor(Math.random() * this.frasesPedidos.length)];
  }
}
