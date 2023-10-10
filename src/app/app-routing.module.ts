import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/list-acoes', pathMatch: 'full'},
  {
    path: 'list-acoes',
    loadChildren: () =>
      import('./views/list-acoes/list-acoes.module').then(
        (m) => m.ListAcoesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
