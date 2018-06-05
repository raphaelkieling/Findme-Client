import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MatCardModule, MatInputModule, MatDialogModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';
import { UsuarioService } from '../../services/core/usuario.service';
import { MensagemService } from '../../services/core/mensagem.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrcamentoModule } from '../orcamento/orcamento.module';
import { OrcamentoModalComponent } from '../orcamento/orcamento-modal/orcamento-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FlexModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    OrcamentoModule,
    MatDialogModule
  ],
  entryComponents: [OrcamentoModalComponent],
  declarations: [ChatComponent],
  exports: [ChatComponent],
  providers: [UsuarioService, MensagemService]
})
export class ChatModule { }
