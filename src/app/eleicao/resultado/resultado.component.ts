import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Candidato, EleicaoService} from "../eleicao.service";

@Component({
    selector: 'app-resultado',
    templateUrl: './resultado.component.html',
    styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent implements OnInit {

    candidatos: Candidato[] = [];
    senha: string = '';
    show: boolean = false;

    constructor(private eleicao: EleicaoService, public location: Location) { }

    ngOnInit() { }

    entrar() {
        if (this.senha && this.senha == 'theo0712') {
            this.show = true;
            this.candidatos = this.eleicao.getCandidatos()
                .map(cand => ({...cand, votos: cand.votos || 0}))
                .sort( (a,b) => a.votos == b.votos ? 0 : a.votos < b.votos ? -1 : 1).reverse();
        } else {
            alert('senha errada!');
        }
    }

    zerar() {
        this.eleicao.zerar();
        this.candidatos = this.eleicao.getCandidatos();
    }

}
