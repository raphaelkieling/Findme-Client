import { ME_USUARIO } from './../../graphql/usuario.querie';
import { COLOCAR_AVATAR } from './../../graphql/pessoa.querie';
import { EDITAR_PROFISSIONAL, CRIA_PROFISSIONAL } from './../../graphql/profissional.querie';
import { Profissional } from './../../domain/profissional';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfissionalService {

    constructor(private apollo: Apollo) { }

    criarProfissional(profissional: Profissional): Observable<any> {
        const mutation = CRIA_PROFISSIONAL;

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
            },
            refetchQueries: [{ query: ME_USUARIO }]
        });
    }

    colocaAvatar(idPessoa, base64) {
        const mutation = COLOCAR_AVATAR;

        return this.apollo.mutate({
            mutation,
            variables: {
                idPessoa,
                base64
            }
        });
    }
}



