import {NgModule} from '@angular/core';

import {EleicaoRoutingModule} from './eleicao-routing.module';
import {CandidatosComponent} from './candidatos/candidatos.component';
import {GeralModule} from '../geral/geral.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import {VotarComponent} from "./votar/votar.component";
import {ObrigadoComponent} from "./obrigado/obrigado.component";
import {ResultadoComponent} from "./resultado/resultado.component";

@NgModule({
    declarations: [
        CandidatosComponent,
        CadastroComponent,
        VotarComponent,
        ObrigadoComponent,
        ResultadoComponent
    ],
    imports: [
        GeralModule,
        EleicaoRoutingModule
    ]
})
export class EleicaoModule {
}
