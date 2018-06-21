import { Base } from "./base";
import { Usuario } from "./usuario";
import { Pedido } from "./pedido";

export class OrcamentoPedido implements Base {
    id: string;
    valor: number;
    profissional: Usuario | string;
    cliente: Usuario | string;
    pedido: Pedido | string;
    status: String;
}