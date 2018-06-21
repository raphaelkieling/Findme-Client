import { Usuario } from './usuario';

export class Comentario {
    mensagem: string;
    usuario_criador: Usuario | number | string;
    usuario_recebeu: Usuario | number | string;
    createdAt: string;
    nota: number;

    constructor(mensagem: string, nota: number, usuario_recebeu: number | string) {
        this.mensagem = mensagem;
        this.nota = nota;
        this.usuario_recebeu = usuario_recebeu;
    }
}