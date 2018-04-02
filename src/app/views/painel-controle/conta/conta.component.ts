import { ProfissionalService } from './../../../services/core/profissional.service';
import { Usuario } from './../../../domain/usuario';
import { UsuarioService } from './../../../services/core/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  usuario: Usuario = null;
  loading = false;

  constructor(
    private usuarioS: UsuarioService,
    private profissionalS: ProfissionalService
  ) { }

  ngOnInit() {
    this.carregaUsuario();
  }


  private carregaUsuario() {
    this.loading = true;

    this.usuarioS
      .me()
      .subscribe((res) => {
        let { data } = res;
        let { me }: { me: Usuario; } = data;

        this.usuario = Object.assign({}, me);
        this.loading = false;
      });
  }

  submit() {
    this.profissionalS
      .editarProfissional(this.usuario)
      .subscribe((res) => {
        console.log(res)
      })
  }
}
