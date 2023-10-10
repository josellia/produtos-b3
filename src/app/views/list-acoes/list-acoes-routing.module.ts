import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAcoesComponent } from './list-acoes.component';

const routes: Routes = [{ path: '', component: ListAcoesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAcoesRoutingModule { }
