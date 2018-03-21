import { Profissional } from './../../domain/profissional';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfissionalService {

    constructor(private apollo: Apollo) { }

    criarProfissional(profissional: Profissional): Observable<any> {
        // {
        //     usuario:"Raphael",
        //     senha:"123456",
        //     pessoa:{
        //         nome:"Raphael",
        //         sobrenome:"Kieling",
        //         enderecos:[
        //             {
        //                 cep:"95555000",
        //                 rua:"Alguma"
        //             },
        //             {
        //                 cep:"95560000",
        //                 rua:"Alguma 2"
        //             }
        //         ]
        //     }
        // }

        const mutation = gql`
            mutation criarNovoProfissional($criarProfissionalInput: criarProfissionalInput!){
                criarProfissional(input: $criarProfissionalInput){
                    usuario
                    senha
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
            mutation, variables: {
                criarProfissionalInput: profissional
            }
        });
    }
}



