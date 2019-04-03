import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {EleicaoService} from '../eleicao.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

    candidato: any = {};
    eleicao: EleicaoService;

    constructor(private local: Location, _eleicao: EleicaoService) {
        this.eleicao = _eleicao;
    }

    ngOnInit() { }

    cadastrar(meuForm) {
        let _nome = meuForm.value.nome;
        let _setor = meuForm.value.setor;
        let _imagem = meuForm.value.imagem;

        if (_nome && _setor) {

            this.eleicao.addCandidato({
                    nome: _nome,
                    setor: _setor,
                    imagem: `/assets/imgs/${_imagem}`
                }
            );
            // this.local.back();
            this.candidato = {};

        } else {
            alert('Você deve digitar todos os dados');
        }
    }

    voltar() {
        this.local.back();
    }

}
