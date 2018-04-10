import { Subscription } from 'apollo-client/util/Observable';
import { UsuarioService } from './../../../services/core/usuario.service';
import { Usuario } from './../../../domain/usuario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  loading: boolean = true;
  usuarios: MatTableDataSource<Usuario[]>;
  colunas = ['id', 'usuario'];
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

  filter(value: string) {
    value = value.trim();
    value = value.toLowerCase();
    this.usuarios.filter = value;
  }

  ngOnDestroy() {
    this.usuariosSub.unsubscribe();
  }
}
