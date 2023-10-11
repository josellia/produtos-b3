import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAcoesRoutingModule } from './cadastro-acoes-routing.module';
import { CadastroAcoesComponent } from './cadastro-acoes.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CadastroAcoesComponent
  ],
  imports: [
    CommonModule,
    CadastroAcoesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],

  exports: [ RouterModule]
})
export class CadastroAcoesModule { }
