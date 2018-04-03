import { Categoria } from './../../domain/categoria';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { criarCategoria, getAllCategorias } from '../../queries/categoria.querie';
@Injectable()
export class CategoriaService {

    constructor(private apollo: Apollo) { }

    getAll(): Observable<any> {
        const query = getAllCategorias;
        return this.apollo.query({ query }).map((res: any) => res.data);
    }

    createCategoria(categoria: Categoria) {
        categoria.nome = categoria.nome.trim();

        const mutation = criarCategoria;
        return this.apollo.mutate({
            mutation,
            variables: {
                nome: categoria.nome,
                foto: categoria.foto
            },
            refetchQueries: [{ query: getAllCategorias }]
        }).map((res: any) => res.data);
    }

}