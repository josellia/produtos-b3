import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarAcoesRoutingModule } from './editar-acoes-routing.module';
import { EditarAcoesComponent } from './editar-acoes.component';


@NgModule({
  declarations: [
    EditarAcoesComponent
  ],
  imports: [
    CommonModule,
    EditarAcoesRoutingModule
  ]
})
export class EditarAcoesModule { }
