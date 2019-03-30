import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EleicaoService } from '../eleicao.service';

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

  ngOnInit() {}

  cadastrar(meuForm) {
    let _nome = meuForm.value.nome;
    let _setor = meuForm.value.setor;
    
    if (_nome && _setor) {
      
      this.eleicao.addCandidato({
        nome: _nome, 
        setor: _setor, 
        imagem: 'https://picsum.photos/150/150?random'}
      );
      this.local.back();

    } else {
      alert('Você deve digitar todos os dados');
    }
  }

  capturarFoto() {

  }

  voltar() {
    this.local.back();
  }

}
