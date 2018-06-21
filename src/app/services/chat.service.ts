import { Injectable } from '@angular/core';
import { Usuario } from '../domain/usuario';
import { Chat } from '../domain/chat';

@Injectable()
export class ChatService {
  chats: Chat[] = [];

  constructor() { }

  addChat(new_chat: Chat) {
    console.log(new_chat);
    let chat = this.chats.filter((chat_unique: Chat) => {
      return chat_unique.usuario.id == new_chat.usuario.id;
    });

    if (chat.length != 0) return;

    this.chats.push(new_chat);
  }

  addChatPeloId(id: string) {
    let chat = this.chats.filter((chat_unique: Chat) => {
      return chat_unique.usuario.id == id
    });

    if (chat.length != 0) return;

    let novo_usuario = new Usuario();
    novo_usuario.id = id;

    this.chats.push(new Chat(novo_usuario, null));
  }

  removeChat(chat: Chat) {
    this.chats = this.chats.filter((chat_unique: Chat) => {
      return chat_unique.usuario.id != chat.usuario.id
    });

  }

}
