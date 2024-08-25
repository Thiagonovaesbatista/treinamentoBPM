import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/solicitacao',
      pathMatch: 'full',
  },
  {
    path: 'solicitacao',
    loadChildren: () =>
      import('./etapa/solicitacao/solicitacao.module').then(
        (m) => m.SolicitacaoModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
