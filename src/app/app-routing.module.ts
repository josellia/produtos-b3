import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list-acoes', pathMatch: 'full' },
  {
    path: 'list-acoes',
    loadChildren: () =>
      import('./views/list-acoes/list-acoes.module').then(
        (m) => m.ListAcoesModule
      ),
  },
  {
    path: 'cadastro-acoes',
    loadChildren: () =>
      import('./views/cadastro-acoes/cadastro-acoes.module').then(
        (m) => m.CadastroAcoesModule
      ),
  },
  {
    path: 'editar-acoes/:id',
    loadChildren: () =>
      import('./views/editar-acoes/editar-acoes.module').then(
        (m) => m.EditarAcoesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
