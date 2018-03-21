import { Categoria } from './categoria';
import { Endereco } from './endereco';
import { Base } from './base';

export class Pessoa extends Base {
    nome: string;
    sobrenome: string;
    nascimento: string;
    cpf: string;
    cnpj: string;
    telefone: string;
    tipo: string;
    categorias: Array<Categoria | number>;
    enderecos: Array<Endereco | number>;
    observacao: string;

    constructor() {
        super();
        this.categorias = [];
        this.enderecos = [];
    }
}