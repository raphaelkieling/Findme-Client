import { Permissao } from './../domain/permissao';
import { Token } from './../domain/token';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
@Injectable()
export class AuthService {

  // token
  public set token(token: string) {
    sessionStorage.setItem('token_', token);
  }

  public get token() {
    return sessionStorage.getItem('token_');
  }

  public tokenRemove() {
    sessionStorage.removeItem('token_');
  }

  public get tokenDecoded(): Token {
    const jwtH = new JwtHelper();
    return jwtH.decodeToken(this.token);
  }

  public authenticated() {
    const jwtH = new JwtHelper();
    if (this.token) {
      // verifica se o token está expirado
      return !jwtH.isTokenExpired(this.token);
    }

    return false;
  }

  public hasPermission(roles) {
    let tokenFiltrados = roles.filter((role) => {
      if (!this.tokenDecoded) {
        return false;
      }

      let hasPermissaoAtual = this.tokenDecoded.usuario.permissaos.filter((permissao: Permissao) => {
        return permissao.nome === role;
      }).length > 0;

      if (hasPermissaoAtual) return role;
    });

    return tokenFiltrados.length == roles.length;
  }
}