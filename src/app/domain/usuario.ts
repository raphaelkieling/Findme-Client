import { Base } from './base';
import { Permissao } from './permissao';
import { Pessoa } from './pessoa';

export class Usuario extends Base {
    usuario: string;
    senha: string;
    permissoes: Array<Permissao | number>;
    permissaos: Array<Permissao | number>;
    pessoa: Pessoa;
    ativo: boolean;

    constructor() {
        super();
        this.pessoa = new Pessoa();
    }
}