import { Usuario } from './usuario';

export class Comentario {
    mensagem: string;
    usuario_criador: Usuario | number | string;
    usuario_recebeu: Usuario | number | string;

    constructor(mensagem:string, usuario_recebeu:number | string){
        this.mensagem = mensagem;
        this.usuario_recebeu = usuario_recebeu;
    }
}