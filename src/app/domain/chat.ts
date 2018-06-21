import { Usuario } from "./usuario";
import { Pedido } from "./pedido";

export class Chat {
    usuario: Usuario;
    pedido: Pedido;

    constructor(usuario: Usuario, pedido: Pedido) {
        this.usuario = usuario;
        this.pedido = pedido;
    }
}