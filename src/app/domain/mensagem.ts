import { Base } from "./base";
import { Usuario } from './usuario';

export class Mensagem implements Base {
    id: string;
    mensagem: string;
    usuario_enviou: number | string;
    usuario_recebeu: number | string;
}