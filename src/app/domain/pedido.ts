import { Categoria } from './categoria';
import { Profissional } from './profissional';
import { Base } from './base';
import { Cliente } from './cliente';

export class Pedido extends Base {
    titulo: string;
    observacao: string;
    status: string;
    dataVencimento: string;
    ativo: boolean;
    categoria: Categoria;
    categoriaId: string;
    cliente: Cliente;
    latitude: number;
    longitude: number;
    profissional: Profissional;
}