import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-pessoal',
  templateUrl: './info-pessoal.component.html',
  styleUrls: ['./info-pessoal.component.css']
})
export class InfoPessoalComponent implements OnInit {

  @Input() objeto: any;
  constructor() { }

  ngOnInit() {
  }

}
