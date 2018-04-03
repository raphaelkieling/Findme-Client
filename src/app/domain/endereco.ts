import { Base } from './base';

export class Endereco extends Base {
    cep: string;
    latitude: number;
    longitude: number;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade:string;
    estado:string;
}