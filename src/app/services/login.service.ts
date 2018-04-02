import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    constructor(
        private apollo: Apollo,
        private authS:AuthService
    ) { }

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

    logout(){
        this.authS.tokenRemove();
    }
}