import { NgModule } from '@angular/core';

import { EleicaoRoutingModule } from './eleicao-routing.module';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { GeralModule } from '../geral/geral.module';

@NgModule({
  declarations: [
    CandidatosComponent
  ],
  imports: [
    GeralModule,
    EleicaoRoutingModule
  ]
})
export class EleicaoModule { }
