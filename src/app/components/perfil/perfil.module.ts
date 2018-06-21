import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UsuarioService } from '../../services/core/usuario.service';
import { PreloaderModule } from '../preloader/preloader.module';
import { FlexModule } from '@angular/flex-layout';
import { BarRatingModule } from "ngx-bar-rating";
import { ComentarioModule } from '../comentario/comentario.module';
import { MatTabsModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    PreloaderModule,
    BarRatingModule,
    ComentarioModule,
    FlexModule,
    MatTabsModule
  ],
  declarations: [PerfilComponent],
  exports: [PerfilComponent],
  providers: [
    UsuarioService
  ]
})
export class PerfilModule { }
