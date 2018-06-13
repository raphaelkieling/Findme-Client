import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UsuarioService } from '../../services/core/usuario.service';
import { PreloaderModule } from '../preloader/preloader.module';
import { MatTabsModule, MatInputModule, MatListModule, MatDividerModule, MatProgressBarModule, MatListItem } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';
import { ComentarioService } from '../../services/core/comentario.service';
import { FormsModule } from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    PreloaderModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    FlexModule,
    FormsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatDividerModule,
    BarRatingModule
  ],
  declarations: [PerfilComponent],
  exports: [PerfilComponent],
  providers: [
    UsuarioService,
    ComentarioService
  ]
})
export class PerfilModule { }
