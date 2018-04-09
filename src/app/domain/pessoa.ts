import { Foto } from './foto';
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
    categorias: Array<Categoria | any>;
    enderecos: Array<Endereco>;
    observacao: string;
    avatar: Foto;

    constructor() {
        super();
        this.categorias = [];
        this.enderecos = [];
    }
}