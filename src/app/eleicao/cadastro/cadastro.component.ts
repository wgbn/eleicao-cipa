import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  candidato: any = {};

  constructor() { }

  ngOnInit() {}

  cadastrar(meuForm) {
    console.log(meuForm.value.nome);
    console.log(meuForm.value.setor);
  }

}
