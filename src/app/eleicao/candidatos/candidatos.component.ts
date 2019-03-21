import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  cardClick(valor) {
    console.log(valor);
    alert('clicou em: '+valor.nome);
  }

}
