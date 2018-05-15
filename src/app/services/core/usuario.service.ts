import { GraphPolicy } from './../../domain/policy';
import { ME_USUARIO, MODIFICA_SENHA, TODOS_USUARIOS, DESATIVA_USUARIO, ATIVA_USUARIO } from './../../graphql/usuario.querie';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Observable } from 'apollo-client/util/Observable';

@Injectable()
export class UsuarioService {

    constructor(
        private apollo: Apollo
    ) { }

    me() {
        let query = ME_USUARIO;

        return this.apollo.watchQuery({
            query,
            fetchPolicy: GraphPolicy.CACHE_AND_NETWORK
        }).valueChanges;
    }

    meSenhaNova(senha) {
        let mutation = MODIFICA_SENHA;

        return this.apollo.mutate({
            mutation,
            variables: {
                senha
            }
        });
    }

    usuarios() {
        let query = TODOS_USUARIOS;

        return this.apollo.watchQuery({
            query,
            fetchPolicy: GraphPolicy.NETWORK_ONLY
        }).valueChanges
    }

    desativarUsuario(id) {
        let mutation = DESATIVA_USUARIO;

        return this.apollo.mutate({
            mutation,
            variables: {
                id: id
            }
        });
    }

    ativarUsuario(id) {
        let mutation = ATIVA_USUARIO;

        return this.apollo.mutate({
            mutation,
            variables: {
                id: id
            }
        });
    }

}