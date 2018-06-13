import { PedidoSocket } from './../../domain/pedidoSocket';
import { GraphPolicy } from './../../domain/policy';
import { CRIAR_PEDIDO, ALL_PEDIDOS, PEDIDOS_PROFISSIONAL, PEDIDOS_CLIENTE, ALL_PEDIDOS_CATEGORIA, PEDIDOS_CLIENTE_FINALIZADOS, PEDIDO_CANCELAR, EDITAR_PEDIDO } from './../../graphql/pedido.querie';
import { Pedido } from './../../domain/pedido';
import { Apollo } from 'apollo-angular';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PedidoService {

    pedidoSocket: EventEmitter<PedidoSocket> = new EventEmitter<PedidoSocket>();

    constructor(
        private apollo: Apollo
    ) { }

    criarPedido(pedido: Pedido) {
        let mutation = CRIAR_PEDIDO;

        return this.apollo.mutate({
            mutation,
            variables: {
                pedidoCreateInput: pedido
            },
            refetchQueries: [{ query: ALL_PEDIDOS }, { query: PEDIDOS_CLIENTE }]
        });
    }

    editarPedido(pedido: Pedido) {
        console.log(pedido)
        let mutation = EDITAR_PEDIDO;
        let pedido_novo = {
            id: pedido.id,
            observacao: pedido.observacao,
            dataVencimento: pedido.dataVencimento,
            titulo: pedido.titulo,
            categoriaId: pedido.categoriaId
        }
        return this.apollo.mutate({
            mutation,
            variables: {
                pedidoEditInput: pedido_novo
            },
            refetchQueries: [{ query: ALL_PEDIDOS }, { query: PEDIDOS_CLIENTE }]
        });
    }

    pedidosProfissional() {
        let query = PEDIDOS_PROFISSIONAL;

        return this.apollo.watchQuery({
            query,
            fetchPolicy: GraphPolicy.NETWORK_ONLY
        }).valueChanges;
    }

    pedidosCliente() {
        let query = PEDIDOS_CLIENTE;

        return this.apollo.watchQuery({
            query,
            fetchPolicy: GraphPolicy.NETWORK_ONLY
        }).valueChanges;
    }

    pedidosClienteFinalizados() {
        let query = PEDIDOS_CLIENTE_FINALIZADOS;

        return this.apollo.watchQuery({
            query,
            fetchPolicy: GraphPolicy.NETWORK_ONLY
        }).valueChanges;
    }

    cancelarPedido(id: any) {
        let mutation = PEDIDO_CANCELAR;

        return this.apollo.mutate({
            mutation,
            variables: {
                id
            },
            refetchQueries: [{ query: ALL_PEDIDOS }, { query: PEDIDOS_CLIENTE }]
        });
    }

    pedidos() {
        let query = ALL_PEDIDOS;

        return this.apollo.watchQuery({
            query
        }).valueChanges;
    }

    pedidosCategorias(arrayDeCategorias) {
        let query = ALL_PEDIDOS_CATEGORIA;

        return this.apollo.watchQuery({
            query,
            variables: {
                categoriasId: arrayDeCategorias
            },
            fetchPolicy: GraphPolicy.NETWORK_ONLY
        }).valueChanges;
    }
}