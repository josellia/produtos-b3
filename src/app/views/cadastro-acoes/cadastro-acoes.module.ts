import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    ReactiveFormsModule,
    SharedModule
  ],

  exports: [ RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CadastroAcoesModule { }
