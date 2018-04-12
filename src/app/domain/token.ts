import { Usuario } from './usuario';
export interface Token {
    iat: number;
    sub: number;
    usuario: Usuario;
}