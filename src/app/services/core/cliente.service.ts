import { CRIAR_CLIENTE } from './../../graphql/cliente.querie';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {

    constructor(
        private apollo: Apollo
    ) { }

    criarCliente(criarClienteInput) {
        const mutation = CRIAR_CLIENTE;

        return this.apollo.mutate({
            mutation,
            variables: {
                criarClienteInput
            }
        });
    }

}