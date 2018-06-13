import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../domain/usuario';
import { UsuarioService } from '../../services/core/usuario.service';
import { Mensagem } from '../../domain/mensagem';
import { AuthService } from '../../services/auth.service';
import { MensagemService } from '../../services/core/mensagem.service';
import { Socket } from 'ng-socket-io';
import { ChatService } from '../../services/chat.service';
import { MatDialog } from '@angular/material/dialog';
import { OrcamentoModalComponent } from '../orcamento/orcamento-modal/orcamento-modal.component';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('conversation') conversation: ElementRef;
  @Input() usuario: Usuario;
  @Output() close = new EventEmitter();
  aberto = true;
  notifications = 0;
  idUsuarioLogado;

  imageDefault = 'assets/images/avatar.jpg';
  mensagens: Mensagem[] = [];

  mensagem = '';

  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private messageService: MensagemService,
    private socket: Socket,
    private chatService: ChatService,
    private dialogModule: MatDialog
  ) { }

  ngOnInit(): void {
    this.idUsuarioLogado = this.authService.tokenDecoded.usuario.id;
    this.getUsuario();
    this.getMessage();
    this.escutaMensagensNovas();
  }

  private escutaMensagensNovas() {
    this.socket.fromEvent(`chat-send-${this.authService.tokenDecoded.usuario.id}`).subscribe((data: Mensagem) => {
      this.mensagens = [...this.mensagens, data];

      if (!this.aberto)
        this.notifications++;

    })
  }

  private getMessage() {
    this.messageService
      .mensagensUsuario(this.usuario.id)
      .subscribe(({ data, loading }) => {
        this.mensagens = data['mensagemsUsuario'];
      })
  }

  private getUsuario() {
    this.usuarioService
      .usuario(this.usuario.id)
      .subscribe(({ data, loading }) => {
        this.usuario = data['usuario'];
      });
  }

  private isProfissional() {
    return this.authService.tokenDecoded.usuario.pessoa.tipo === 'profissional'
  }

  private isMaster() {
    return this.authService.tokenDecoded.usuario.pessoa.tipo === 'master'
  }


  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    if (this.conversation)
      this.conversation.nativeElement.scrollTop = this.conversation.nativeElement.scrollHeight;
  }

  addMensagem(mensagem) {
    if (mensagem.length == 0) return;

    let nova_mensagem = new Mensagem();
    nova_mensagem.mensagem = mensagem;
    nova_mensagem.usuario_recebeu = this.usuario.id;
    nova_mensagem.usuario_enviou = this.idUsuarioLogado;

    this.messageService
      .criarMensagem(nova_mensagem)
      .subscribe(({ data }) => {
        console.log(data);

        this.mensagens = [...this.mensagens, data['criarMensagem']];
      })
  }

  fazerOrcamento() {
    this.dialogModule.open(OrcamentoModalComponent);
  }

  removeChat() {
    this.close.emit();
  }
}
