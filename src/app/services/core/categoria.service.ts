import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

    constructor(private apollo: Apollo) { }

    getAll(): Observable<any> {
        const query = gql`
            query{
                categorias{
                    id
                    nome
                    foto
                }
            }
        `;
        return this.apollo.query({ query }).map((res: any) => res.data);
    }

}