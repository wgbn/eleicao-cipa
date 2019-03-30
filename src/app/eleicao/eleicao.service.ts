import { Injectable } from '@angular/core';
import { _ParseAST } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EleicaoService {

  private _candidatos: Candidato[] = [];

  constructor() {
    const _temp = localStorage.getItem('candidatos');
    this._candidatos = _temp ? JSON.parse(_temp) : [];
  }

  getCandidatos(): Candidato[] {
    return this._candidatos;
  }

  getUmCandidato(index): Candidato {
    return this._candidatos[index];
  }

  addCandidato(candidato: Candidato) {
    this._candidatos.push(candidato);
    this.saveLocal();
  }

  saveCandidato(candidato: Candidato, index: number) {
    this._candidatos[index] = candidato;
    this.saveLocal();
  }

  private saveLocal() {
    localStorage.setItem('candidatos', JSON.stringify(this._candidatos));
  }

}

export class Candidato {
  nome: string;
  setor: string;
  imagem: string;
  votos?: number = 0;

  constructor(_nome: string, _setor: string, _imagem: string) {
    this.nome = _nome;
    this.setor = _setor;
    this.imagem = _imagem;
  }
}

export class People {
  gender: string;
  name: Name;
  email: string;
  login: any;
  dob: any;
  registered: any;
  phone: string;
  cell: string;
  id: any;
  picture: any;
  nat: string;
}

export class Name {
  title?: string;
  first?: string;
  last?: string;
}