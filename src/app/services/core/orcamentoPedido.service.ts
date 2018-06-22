import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GraphPolicy } from '../../domain/policy';
import { CRIAR_ORCAMENTO, ORCAMENTO_PENDENTES, ACEITAR_ORCAMENTO, CANCELAR_ORCAMENTO } from '../../graphql/orcamentoPedido';
import { OrcamentoPedido } from '../../domain/orcamentoPedido';

@Injectable()
export class OrcamentoPedidoService {

    constructor(
        private apollo: Apollo
    ) { }

    criarOrcamentoPedido(input: OrcamentoPedido) {
        const mutation = CRIAR_ORCAMENTO;

        return this.apollo.mutate({
            mutation,
            variables: {
                input
            }
        });
    }

    orcamentosPendentes() {
        const query = ORCAMENTO_PENDENTES;

        return this.apollo.watchQuery({
            query,
            fetchPolicy: GraphPolicy.NETWORK_ONLY
        }).valueChanges;
    }

    aceitarOrcamento(idPedido: string) {
        const mutation = ACEITAR_ORCAMENTO;

        return this.apollo.mutate({
            mutation,
            variables: {
                idPedido
            }
        });
    }

    cancelarOrcamento(idPedido: string) {
        const mutation = CANCELAR_ORCAMENTO;

        return this.apollo.mutate({
            mutation,
            variables: {
                idPedido
            }
        });
    }

}

