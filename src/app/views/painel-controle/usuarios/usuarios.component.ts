import { Subscription } from 'apollo-client/util/Observable';
import { UsuarioService } from './../../../services/core/usuario.service';
import { Usuario } from './../../../domain/usuario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  loading: boolean = true;
  usuarios: MatTableDataSource<Usuario[]>;
  colunas = ['id', 'usuario', 'acao'];
  usuariosSub: Subscription;
  constructor(
    private usuarioS: UsuarioService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.carregaUsuarios();
  }

  carregaUsuarios() {
    this.usuariosSub = this.usuarioS.usuarios()
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        if (!data) return;

        this.usuarios = new MatTableDataSource(data.usuarios);
      },
        err => {
          const snack = this.snack.open('Problema ao carregar os usuários', 'Tudo bem', {
            duration: 5000
          });

          snack.onAction().subscribe(() => {
            this.snack.dismiss();
          })
        })
  }

  desativarUsuario(idUsuario) {
    this.usuarioS.desativarUsuario(idUsuario)
      .subscribe(({ data }) => {
        if (!data) return;

        this.carregaUsuarios();

        const snack = this.snack.open('Usuário desativado com sucesso!', 'Uhul!', {
          duration: 5000
        });

        snack.onAction().subscribe(() => {
          snack.dismiss();
        })
      },
        err => {
          const snack = this.snack.open('Problema ao desativar o usuário', 'Tentar Novamente', {
            duration: 5000
          });

          snack.onAction().subscribe(() => {
            this.desativarUsuario(idUsuario);
          })
        })
  }

  ativarUsuario(idUsuario) {
    this.usuarioS.ativarUsuario(idUsuario)
      .subscribe(({ data }) => {
        if (!data) return;
        
        this.carregaUsuarios();

        const snack = this.snack.open('Usuário ativado com sucesso!', 'Uhul!', {
          duration: 5000
        });

        snack.onAction().subscribe(() => {
          snack.dismiss();
        })
      },
        err => {
          const snack = this.snack.open('Problema ao ativar o usuário', 'Tentar Novamente', {
            duration: 5000
          });

          snack.onAction().subscribe(() => {
            this.ativarUsuario(idUsuario);
          })
        })
  }

  filter(value: string) {
    value = value.trim();
    value = value.toLowerCase();
    this.usuarios.filter = value;
  }

  ngOnDestroy() {
    this.usuariosSub.unsubscribe();
  }
}
