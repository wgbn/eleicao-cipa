import {Component, OnInit} from '@angular/core';
import {EleicaoService, Candidato} from '../eleicao.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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
        private http: HttpClient
    ) {
    }

    ngOnInit() {
        this.loadCandidatos();
    }

    cardClick(index) {
        this.meuRouter.navigate([`/eleicao/voto/${index}`]);
    }

    loadCandidatos() {
        this.candidatos = this.cands.getCandidatos();
    }

}
