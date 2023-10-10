import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAcoesRoutingModule } from './list-acoes-routing.module';
import { ListAcoesComponent } from './list-acoes.component';


@NgModule({
  declarations: [
    ListAcoesComponent
  ],
  imports: [
    CommonModule,
    ListAcoesRoutingModule
  ]
})
export class ListAcoesModule { }
