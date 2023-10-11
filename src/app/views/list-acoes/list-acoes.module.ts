import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { ListAcoesRoutingModule } from './list-acoes-routing.module';
import { ListAcoesComponent } from './list-acoes.component';
import { SharedModule } from '@shared/shared.module';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    ListAcoesComponent
  ],
  imports: [
    CommonModule,
    ListAcoesRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt' }],
})
export class ListAcoesModule { }
