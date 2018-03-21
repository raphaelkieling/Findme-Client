import { EnderecoService } from './../../services/core/endereco.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() objeto: any;

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit() { }

  pegaEnderecoPeloCep(cep: string) {
    this.enderecoService
      .pegaEnderecoPorCEP(cep)
      .subscribe(res=>{
        this.objeto.bairro = res['bairro']
        this.objeto.cep = res['cep']
        this.objeto.complemento = res['complemento']
        this.objeto.cidade = res['localidade']
        this.objeto.logradouro = res['logradouro']
        this.objeto.estado = res['uf']
      })
  }

}
