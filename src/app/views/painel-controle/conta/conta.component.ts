import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfissionalService } from './../../../services/core/profissional.service';
import { Usuario } from './../../../domain/usuario';
import { UsuarioService } from './../../../services/core/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'apollo-client/util/Observable';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  usuario: any = {};
  loading = false;
  usuarioSubscription: Subscription;
  usuarioEditarSubscribe: Subscription;

  constructor(
    private usuarioS: UsuarioService,
    private profissionalS: ProfissionalService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.carregaUsuario();
  }


  private carregaUsuario() {
    this.loading = true;

    this.usuarioSubscription = this.usuarioS
      .me()
      .subscribe(res => {
        this.usuario = JSON.parse(JSON.stringify(res));
        this.loading = false;
        this.usuarioSubscription.unsubscribe();
      },
        err => {
          const snack = this.snack.open('Não foi possível carregar o usuário', 'Tentar novamente', {
            duration: 2000
          });

          snack.onAction().subscribe(() => {
            this.carregaUsuario();
          });

          this.usuarioSubscription.unsubscribe();
        });
  }

  submit() {
    this.usuarioEditarSubscribe = this.profissionalS
      .editarProfissional(this.usuario)
      .subscribe((res) => {
        this.usuarioEditarSubscribe.unsubscribe();
        this.snack.open('Usuário salvo com sucesso!', 'Uhul!', {
          duration: 3000
        });
      },
        err => {
          this.usuarioEditarSubscribe.unsubscribe();
          this.snack.open('Não foi possível salvar o usuário, tenta mais uma vez', 'Tentar');
        })
  }
}
