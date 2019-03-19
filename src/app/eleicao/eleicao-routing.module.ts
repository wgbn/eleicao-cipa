import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatosComponent } from './candidatos/candidatos.component';

const routes: Routes = [
  { path: '', component: CandidatosComponent },
  { path: '/voto', component: null },
  { path: '/cadastro', component: null },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EleicaoRoutingModule { }
