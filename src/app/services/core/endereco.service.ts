import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EnderecoService {

    constructor(private http: HttpClient) { }

    pegaEnderecoPorCEP(cep:string){
        this.http.get(`viacep.com.br/ws/${cep}/json/`);
    }

}