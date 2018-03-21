import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EnderecoService {

    constructor(private http: Http) { }

    pegaEnderecoPorCEP(cep:string){
        return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).map(res => JSON.parse(res['_body']));
    }

}