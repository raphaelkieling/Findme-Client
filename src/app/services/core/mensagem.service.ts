import { Injectable } from '@angular/core';
import { Comentario } from '../../domain/comentario';
import { Apollo } from 'apollo-angular';
import { GraphPolicy } from '../../domain/policy';
import { CRIAR_MENSAGEM, MENSAGENS } from '../../graphql/mensagem.querie';
import { Mensagem } from '../../domain/mensagem';

@Injectable()
export class MensagemService {

  constructor(
    private apollo: Apollo
  ) { }

  criarMensagem(input: Mensagem) {
    delete input.usuario_enviou;
    console.log(input);
    const mutation = CRIAR_MENSAGEM;

    return this.apollo.mutate({
      mutation,
      variables: {
        input
      }
    });
  }

  mensagensUsuario(id) {
    let query = MENSAGENS;

    return this.apollo.watchQuery({
      query,
      fetchPolicy: GraphPolicy.NETWORK_ONLY,
      variables:{
        id
      }
    }).valueChanges;
  }


}
