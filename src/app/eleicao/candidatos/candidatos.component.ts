import { Component, OnInit } from '@angular/core';
import { EleicaoService, Candidato } from '../eleicao.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {

  candidatos: Candidato[] = [];

  constructor(private cands: EleicaoService) { }

  ngOnInit() {
    this.loadCandidatos();
  }

  cardClick(valor) {
    alert('clicou em: '+valor.nome);
  }

  loadCandidatos() {
    this.candidatos = this.cands.getCandidatos();
  }

}
