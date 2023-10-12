import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcoesComponent } from './editar-acoes.component';

const routes: Routes = [{ path: '', component: EditarAcoesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarAcoesRoutingModule { }
