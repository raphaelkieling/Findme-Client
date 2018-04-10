import { GraphPolicy } from './../../domain/policy';
import { ME_USUARIO, MODIFICA_SENHA, TODOS_USUARIOS } from './../../graphql/usuario.querie';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

    constructor(
        private apollo: Apollo
    ) { }

    me(): Observable<any> {
        let query = ME_USUARIO;

        return this.apollo.watchQuery({
            query,
            fetchPolicy: GraphPolicy.CACHE_AND_NETWORK
        }).valueChanges;
    }

    meSenhaNova(senha): Observable<any> {
        let mutation = MODIFICA_SENHA;

        return this.apollo.mutate({
            mutation,
            variables: {
                senha
            }
        });
    }

    usuarios(): Observable<any> {
        let query = TODOS_USUARIOS;

        return this.apollo.watchQuery({
            query,
            fetchPolicy: GraphPolicy.CACHE_AND_NETWORK
        }).valueChanges
    }

}