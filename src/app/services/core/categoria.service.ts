import { GraphPolicy } from './../../domain/policy';
import { EDITAR_CATEGORIA, DELETAR_CATEGORIA, ADICIONAR_CATEGORIA_PESSOA, RETIRA_CATEGORIA_PESSOA } from './../../graphql/categoria.querie';
import { Categoria } from './../../domain/categoria';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GET_ALL_CATEGORIAS, CRIA_CATEGORIA } from '../../graphql/categoria.querie';
@Injectable()
export class CategoriaService {

    constructor(private apollo: Apollo) { }

    getAll(fetchPolicy: GraphPolicy = GraphPolicy.NETWORK_ONLY): Observable<any> {
        const query = GET_ALL_CATEGORIAS;
        return this.apollo.query({
            query,
            fetchPolicy
        }).map((res: any) => res.data);
    }

    createCategoria(categoria: Categoria) {
        categoria.nome = categoria.nome.trim();

        const mutation = CRIA_CATEGORIA;
        return this.apollo.mutate({
            mutation,
            variables: {
                nome: categoria.nome,
                foto: categoria.foto
            },
            update: (store, { data: { criarCategoria } }) => {
                const data = store.readQuery({ query: GET_ALL_CATEGORIAS });
                data['categorias'].push(criarCategoria);
                store.writeQuery({ query: GET_ALL_CATEGORIAS, data });
            }
        }).map((res: any) => res.data);
    }

    editarCategoria(categoria: Categoria) {
        const mutation = EDITAR_CATEGORIA;

        return this.apollo.mutate({
            mutation,
            variables: {
                id: categoria.id,
                nome: categoria.nome,
                foto: categoria.foto
            },
            refetchQueries: [{ query: GET_ALL_CATEGORIAS }]
        }).map((res: any) => res.data);
    }

    deleteCategoria(id: any) {
        const mutation = DELETAR_CATEGORIA;

        return this.apollo.mutate({
            mutation,
            variables: {
                id
            },
            update: (store, { data: { deletarCategoria: idDeletado } }) => {
                const data = store.readQuery({ query: GET_ALL_CATEGORIAS })
                data['categorias'] = data['categorias'].filter((categoria: Categoria) => categoria.id !== idDeletado);
                store.writeQuery({ query: GET_ALL_CATEGORIAS, data });
            }
        }).map((res: any) => res.data);
    }

    adicionaCategoriaPessoa(idCategoria: any, idPessoa: any) {
        const mutation = ADICIONAR_CATEGORIA_PESSOA;
        return this.apollo.mutate({
            mutation,
            variables: {
                idCategoria,
                idPessoa
            }
        }).map((res: any) => res.data);
    }

    retiraCategoriaPessoa(idCategoria: any, idPessoa: any) {
        const mutation = RETIRA_CATEGORIA_PESSOA;
        return this.apollo.mutate({
            mutation,
            variables: {
                idCategoria,
                idPessoa
            }
        }).map((res: any) => res.data);
    }
}