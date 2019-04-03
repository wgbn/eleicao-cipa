import {Injectable} from '@angular/core';
import {_ParseAST} from '@angular/compiler';

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
        this._candidatos = [...this._candidatos.sort( (a,b) => a.nome == b.nome ? 0 : a.nome < b.nome ? -1 : 1)];
        this.saveLocal();
    }

    saveCandidato(candidato: Candidato, index: number) {
        this._candidatos[index] = candidato;
        this.saveLocal();
    }

    private saveLocal() {
        localStorage.setItem('candidatos', JSON.stringify(this._candidatos));
    }

    votar(index) {
        if (!this._candidatos[index].hasOwnProperty('votos') || this._candidatos[index].votos === null) {
            this._candidatos[index].votos = 0;
        }
        this._candidatos[index].votos++;
        this.saveLocal();
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
