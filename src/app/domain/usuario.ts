import { Base } from './base';
import { Permissao } from './permissao';
import { Pessoa } from './pessoa';
import { Pedido } from './pedido';

export class Usuario extends Base {
    usuario: string;
    senha: string;
    permissoes: Array<Permissao | number>;
    permissaos: Array<Permissao | number>;
    pessoa: Pessoa;
    ativo: boolean;

    pedido: Pedido;

    constructor() {
        super();
        this.pessoa = new Pessoa();
    }
}