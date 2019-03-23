import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {

  candidatos: any[] = [];

  constructor() { }

  ngOnInit() {}

  cardClick(valor) {
    alert('clicou em: '+valor.nome);
  }

  carregar() {
    this.candidatos = [
      {nome: 'Matheus Maia', setor: 'Senai', imagem: "https://api.adorable.io/avatars/200/matheusmaia.png"},
      {nome: 'Caique Santos', setor: 'Uber', imagem: "https://api.adorable.io/avatars/200/caiquesantos.png"},
      {nome: 'Walter Gandarella', setor: 'Professor', imagem: "https://api.adorable.io/avatars/200/waltergandarella.png"},
      {nome: 'George Araujo', setor: 'Web', imagem: "https://api.adorable.io/avatars/200/georgearaujo.png"},
      {nome: 'Fernanda Castro', setor: 'JCR', imagem: "https://api.adorable.io/avatars/200/fernandacastro.png"},
      {nome: 'Helvecio Neto', setor: 'Senai', imagem: "https://api.adorable.io/avatars/200/helvecioneto.png"},
      {nome: 'Jose Dormindo', setor: 'Senai', imagem: "https://api.adorable.io/avatars/200/josedormindo.png"},
    ];
  }

}
