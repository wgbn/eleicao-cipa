import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleicaoRoutingModule } from './eleicao-routing.module';
import { CandidatosComponent } from './candidatos/candidatos.component';

@NgModule({
  declarations: [
    CandidatosComponent
  ],
  imports: [
    CommonModule,
    EleicaoRoutingModule
  ]
})
export class EleicaoModule { }
