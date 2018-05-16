import { Injectable } from '@angular/core';
import { Usuario } from '../domain/usuario';

@Injectable()
export class ChatService {
  chats: Usuario[] = [];

  constructor() { }

  addChat(novo_usuario: Usuario) {
    let chat = this.chats.filter((usuario: Usuario) => {
      return usuario.id == novo_usuario.id;
    });

    if (chat.length != 0) return;

    this.chats.push(novo_usuario);
  }

  addChatPeloId(id: string) {
    let chat = this.chats.filter((usuario: Usuario) => {
      return usuario.id == id
    });

    if (chat.length != 0) return;

    let novo_usuario = new Usuario();
    novo_usuario.id = id;

    this.chats.push(novo_usuario);
  }

  removeChat(id){
    this.chats = this.chats.filter((usuario: Usuario) => {
      return usuario.id != id
    });

  }

}
