import { EDITAR_CATEGORIA, DELETAR_CATEGORIA } from './../../graphql/categoria.querie';
import { Categoria } from './../../domain/categoria';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GET_ALL_CATEGORIAS, CRIA_CATEGORIA } from '../../graphql/categoria.querie';
@Injectable()
export class CategoriaService {

    constructor(private apollo: Apollo) { }

    getAll(): Observable<any> {
        const query = GET_ALL_CATEGORIAS;
        return this.apollo.query({ query }).map((res: any) => res.data);
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
            update: (store, { data: { deletarCategoria:idDeletado } }) => {
                const data = store.readQuery({ query: GET_ALL_CATEGORIAS })
                data['categorias'] = data['categorias'].filter((categoria:Categoria) => categoria.id !== idDeletado);
                store.writeQuery({ query: GET_ALL_CATEGORIAS, data });
            }
        }).map((res: any) => res.data);
    }
}