import { ClienteService } from './../../../services/core/cliente.service';
import { TipoUsuario } from './../../../domain/tipo';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfissionalService } from './../../../services/core/profissional.service';
import { Usuario } from './../../../domain/usuario';
import { UsuarioService } from './../../../services/core/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'apollo-client/util/Observable';
import { ImgCropperComponent } from '../../../components/img-cropper/img-cropper.component';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  public coresSenhaForca = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public novaSenha: string = '';

  public usuario: Usuario;
  public loading = false;

  public usuarioSubscription: Subscription;
  public usuarioEditarSubscribe: Subscription;
  public usuarioSenhaEditaSubscribe: Subscription;

  public imageUrl = 'assets/images/avatar.jpg';

  constructor(
    private usuarioS: UsuarioService,
    private profissionalS: ProfissionalService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.carregaUsuario();
  }


  private carregaUsuario() {

    this.usuarioSubscription = this.usuarioS
      .me()
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        if (!data) return;

        this.usuario = JSON.parse(JSON.stringify(data['me']));
        this.usuario.pessoa.categorias = this.usuario.pessoa.categorias.map((categoria) => categoria.id);
        this.imageUrl = this.usuario.pessoa.avatar ? this.usuario.pessoa.avatar.base64 : this.imageUrl;
        this.loading = false;
      },
        err => {
          const snack = this.snack.open('Não foi possível carregar o usuário', 'Tentar novamente', {
            duration: 2000
          });

          snack.onAction().subscribe(() => {
            this.carregaUsuario();
          });

        });
  }

  modificarSenha(novaSenha) {
    this.usuarioSenhaEditaSubscribe = this.usuarioS
      .meSenhaNova(novaSenha)
      .subscribe((res) => {
        this.snack.open('Senha alterada com sucesso!', 'Uhul!', {
          duration: 3000
        });
      },
        err => {
          let snack = this.snack.open('Problema ao alterar a senha...!', 'Tentar novamente', {
            duration: 4000
          });

          snack.onAction().subscribe(() => {
            this.modificarSenha(novaSenha);
          })
        });
  }

  abrirCrooperFoto() {
    this.dialog.open(ImgCropperComponent, {
      maxWidth: '500px',
      data: {
        fn: (base64) => new Promise((resolve, reject) => {
          return this.profissionalS
            .colocaAvatar(this.usuario.pessoa.id, base64)
            .toPromise()
            .then(({ data }) => {
              this.imageUrl = data.adicionarFoto.base64;
              this.snack.open('Foto editada com sucesso!', 'Uhul', {
                duration: 3000
              });
              resolve()
            })
            .catch((err) => {
              this.snack.open('Não foi possivel editar a foto, tente mais tarde!', 'Aff', {
                duration: 3000
              });
              reject();
            })
        })
      }
    })
  }


  submit() {
    console.log(this.usuario);
    switch (this.usuario.pessoa.tipo) {
      case TipoUsuario.PROFISSIONAL:
        this.editarProfissional();
        break;
      case TipoUsuario.CLIENTE:
        this.editarCliente();
        break;
    }
  }

  private editarProfissional() {
    this.usuarioEditarSubscribe = this.profissionalS
      .editarProfissional(this.usuario)
      .subscribe((res) => {
        this.usuarioEditarSubscribe.unsubscribe();
        this.snack.open('Usuário salvo com sucesso!', 'Uhul!', {
          duration: 3000
        });
      }, err => {
        this.usuarioEditarSubscribe.unsubscribe();
        this.snack.open('Não foi possível salvar o usuário, tenta mais uma vez', 'Tentar');
      });
  }

  private editarCliente() {
    this.snack.open('Editar cliente ainda não foi implementado', 'ok', {
      duration: 3000
    })
    // this.usuarioEditarSubscribe = this.clienteService
    //   .editarCliente(this.usuario)
    //   .subscribe((res) => {
    //     this.usuarioEditarSubscribe.unsubscribe();
    //     this.snack.open('Usuário salvo com sucesso!', 'Uhul!', {
    //       duration: 3000
    //     });
    //   }, err => {
    //     this.usuarioEditarSubscribe.unsubscribe();
    //     this.snack.open('Não foi possível salvar o usuário, tenta mais uma vez', 'Tentar');
    //   });
  }

  ngOnDestroy() {
    if (this.usuarioSubscription) this.usuarioSubscription.unsubscribe();
    if (this.usuarioSenhaEditaSubscribe) this.usuarioSenhaEditaSubscribe.unsubscribe();
  }
}
