import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    constructor(private apollo: Apollo) { }

    login({usuario, senha}): Observable < any > {
        let mutation = gql`
            mutation {
                createToken(usuario:"${usuario}",senha:"${senha}"){
                    token
                }
            }
        `;

        return this.apollo.mutate({ mutation });
    }
}