import {Injectable} from '@angular/core';
// import CANDIDATOS from '../../assets/candidatos.json';
const CANDIDATOS = [
    {
        "nome": "Allan",
        "setor": "Centro Médico",
        "imagem": "/assets/imgs/allan.jpeg"
    },
    {
        "nome": "Diego Menezes",
        "setor": "Centro Médico",
        "imagem": "/assets/imgs/diego-menezes.jpeg"
    },
    {
        "nome": "Diego de Assis",
        "setor": "Jardim",
        "imagem": "/assets/imgs/diego-assis.jpeg"
    },
    {
        "nome": "Edson",
        "setor": "Nutrição",
        "imagem": "/assets/imgs/edson.jpeg"
    },
    {
        "nome": "Elias",
        "setor": "Infermagem",
        "imagem": "/assets/imgs/elias.jpeg"
    },
    {
        "nome": "Fredson",
        "setor": "Portaria",
        "imagem": "/assets/imgs/fredson.jpeg"
    },
    {
        "nome": "Fábio",
        "setor": "Motorista",
        "imagem": "/assets/imgs/fabio.jpeg"
    },
    {
        "nome": "Fábio Adriano",
        "setor": "Prof. Yoga",
        "imagem": "/assets/imgs/fabio-yoga.jpeg"
    },
    {
        "nome": "Gil Humberto",
        "setor": "Governança",
        "imagem": "/assets/imgs/gil.jpeg"
    },
    {
        "nome": "Gilmar",
        "setor": "Portaria",
        "imagem": "/assets/imgs/gilmar.jpeg"
    },
    {
        "nome": "Joramaclei",
        "setor": "Nutrição",
        "imagem": "/assets/imgs/joramaclei.jpeg"
    },
    {
        "nome": "Juliana",
        "setor": "Governança",
        "imagem": "/assets/imgs/juliana.jpeg"
    },
    {
        "nome": "Marcela",
        "setor": "Nutrição",
        "imagem": "/assets/imgs/marcela.jpeg"
    },
    {
        "nome": "Marivaldo",
        "setor": "Portaria",
        "imagem": "/assets/imgs/marivaldo.jpeg"
    },
    {
        "nome": "Rogério",
        "setor": "Nutrição",
        "imagem": "/assets/imgs/rogerio.jpeg"
    },
    {
        "nome": "Samia",
        "setor": "Compras",
        "imagem": "/assets/imgs/samia.jpeg"
    },
    {
        "nome": "Ualton",
        "setor": "Nutrição",
        "imagem": "/assets/imgs/ualton.jpeg"
    },
    {
        "nome": "Verena Veron",
        "setor": "Recepção",
        "imagem": "/assets/imgs/verena.jpeg"
    }
];

@Injectable({
    providedIn: 'root'
})
export class EleicaoService {

    private _candidatos: Candidato[] = [];

    constructor() {
        const _temp = localStorage.getItem('candidatos');
        this._candidatos = _temp ? JSON.parse(_temp) : [];

        if (this._candidatos.length == 0) {
            this._candidatos = [...CANDIDATOS];
        }
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
