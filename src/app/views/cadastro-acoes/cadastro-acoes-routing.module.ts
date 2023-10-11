import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAcoesComponent } from './cadastro-acoes.component';

const routes: Routes = [{ path: '', component: CadastroAcoesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroAcoesRoutingModule { }
