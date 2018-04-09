import { ME_USUARIO } from './../../graphql/usuario.querie';
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
            fetchPolicy: 'network-only'
        })
            .valueChanges
            .map((result: any) => result.data.me);
    }

}