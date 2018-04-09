import { EDITAR_PROFISSIONAL } from './../../graphql/profissional.querie';
import { Profissional } from './../../domain/profissional';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { CRIA_CATEGORIA } from '../../graphql/categoria.querie';

@Injectable()
export class ProfissionalService {

    constructor(private apollo: Apollo) { }

    criarProfissional(profissional: Profissional): Observable<any> {
        const mutation = CRIA_CATEGORIA;

        return this.apollo.mutate({
            mutation,
            variables: {
                criarProfissionalInput: profissional
            }
        });
    }

    editarProfissional(profissional: Profissional): Observable<any> {
        const mutation = EDITAR_PROFISSIONAL;

        return this.apollo.mutate({
            mutation,
            variables: {
                editaProfissionalParams: profissional
            }
        });
    }
}



