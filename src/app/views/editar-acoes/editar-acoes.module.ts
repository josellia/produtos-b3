import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarAcoesRoutingModule } from './editar-acoes-routing.module';
import { EditarAcoesComponent } from './editar-acoes.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    EditarAcoesComponent
  ],
  imports: [
    CommonModule,
    EditarAcoesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],

  exports: [RouterModule],
})
export class EditarAcoesModule { }
