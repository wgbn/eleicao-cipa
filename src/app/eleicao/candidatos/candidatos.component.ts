import { Component, OnInit } from '@angular/core';
import { EleicaoService, Candidato, People } from '../eleicao.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {

  candidatos: Candidato[] = [];

  constructor(
    private cands: EleicaoService, 
    private meuRouter: Router,
    private http: HttpClient,
    private camera: Camera
  ) { }

  ngOnInit() {
    this.loadCandidatos();
  }

  cardClick(valor) {
    alert('clicou em: '+valor.nome);
  }

  loadCandidatos() {
    //this.candidatos = this.cands.getCandidatos();
    this.http.get<any>('https://randomuser.me/api/?results=15')
      .subscribe(users => this.populaCandidatos(users.results));
  }

  private populaCandidatos(results) {
    // this.candidatos = results;
    this.candidatos = results.map(people => ({
      nome: people.name.first, 
      imagem: people.picture.large, 
      setor: people.location.city}
      ));
  }

  navegar() {
    this.meuRouter.navigate(['/eleicao/cadastro']);
  }

}
