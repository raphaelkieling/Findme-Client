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
        let query = gql`
            query {
                me{
                    usuario
                    pessoa{
                      nome
                      sobrenome
                      nascimento
                      cpf
                      cnpj
                      telefone
                      observacao
                      categorias{
                        id
                      }
                      enderecos{
                        id
                        cep
                        numero
                        latitude
                        longitude
                        logradouro
                        numero
                        complemento
                        bairro
                        cidade
                        estado
                      }
                    }
                  }
            }
        `;

        return this.apollo.watchQuery({
            query,
            fetchPolicy: 'network-only'
        })
            .valueChanges
            .map((result: any) => result.data.me);
    }

}