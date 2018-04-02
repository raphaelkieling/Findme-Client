import { Profissional } from './../../domain/profissional';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfissionalService {

    constructor(private apollo: Apollo) { }

    criarProfissional(profissional: Profissional): Observable<any> {
        const mutation = gql`
            mutation criarNovoProfissional($criarProfissionalInput: criarProfissionalInput!){
                criarProfissional(input: $criarProfissionalInput){
                    usuario
                    pessoa{
                        nome
                        enderecos{
                            cep
                        }
                    }
                }
            }
        `;

        return this.apollo.mutate({
            mutation,
            variables: {
                criarProfissionalInput: profissional
            }
        });
    }

    editarProfissional(profissional: Profissional): Observable<any> {
        const mutation = gql`
            mutation editarProfissional($editaProfissionalParams: editaProfissionalInput!){
                editarProfissional(input: $editaProfissionalParams){
                    usuario
                    pessoa{
                        nome
                        sobrenome
                    }
                }
            }

        `;

        return this.apollo.mutate({
            mutation,
            variables: {
                editaProfissionalParams: profissional
            }
        });
    }
}



