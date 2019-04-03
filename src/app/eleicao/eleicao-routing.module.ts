import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CandidatosComponent} from './candidatos/candidatos.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {VotarComponent} from "./votar/votar.component";
import {ObrigadoComponent} from "./obrigado/obrigado.component";
import {ResultadoComponent} from "./resultado/resultado.component";

const routes: Routes = [
    {path: '', component: CandidatosComponent},
    {path: 'voto/:index', component: VotarComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'obrigado', component: ObrigadoComponent},
    {path: 'resultado', component: ResultadoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EleicaoRoutingModule {
}
