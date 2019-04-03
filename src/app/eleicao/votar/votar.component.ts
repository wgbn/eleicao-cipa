import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Candidato, EleicaoService} from "../eleicao.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-votar',
    templateUrl: './votar.component.html',
    styleUrls: ['./votar.component.scss'],
})
export class VotarComponent implements OnInit {

    candidato: Candidato = null;
    index: number = null;

    constructor(private route: ActivatedRoute, public location: Location, private eleicao: EleicaoService, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['index']) {
                this.index = params['index'];
                this.candidato = this.eleicao.getUmCandidato(params['index']);
            }
        });
    }

    votar() {
        this.eleicao.votar(this.index);
        this.router.navigate(['/eleicao/obrigado']);
    }

}
