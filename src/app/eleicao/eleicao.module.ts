import { NgModule } from '@angular/core';

import { EleicaoRoutingModule } from './eleicao-routing.module';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { GeralModule } from '../geral/geral.module';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    CandidatosComponent,
    CadastroComponent
  ],
  imports: [
    GeralModule,
    EleicaoRoutingModule
  ]
})
export class EleicaoModule { }
