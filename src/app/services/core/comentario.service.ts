import { Injectable } from '@angular/core';
import { Comentario } from '../../domain/comentario';
import { CRIAR_COMENTARIO, COMENTARIOS } from '../../graphql/comentario.querie';
import { Apollo } from 'apollo-angular';
import { GraphPolicy } from '../../domain/policy';

@Injectable()
export class ComentarioService {

  constructor(
    private apollo: Apollo
  ) { }

  criarComentario(input: Comentario) {
    const mutation = CRIAR_COMENTARIO;

    return this.apollo.mutate({
      mutation,
      variables: {
        input
      }
    });
  }

  comentarioUsuario(id) {
    let query = COMENTARIOS;

    return this.apollo.watchQuery({
      query,
      fetchPolicy: GraphPolicy.NETWORK_ONLY,
      variables:{
        id
      }
    }).valueChanges;
  }


}
