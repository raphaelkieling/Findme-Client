import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MatCardModule, MatInputModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';
import { UsuarioService } from '../../services/core/usuario.service';
import { MensagemService } from '../../services/core/mensagem.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FlexModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [ChatComponent],
  exports: [ChatComponent],
  providers: [UsuarioService, MensagemService]
})
export class ChatModule { }
