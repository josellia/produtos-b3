import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AcoesInMemoryApi } from '../acoes.in-memory.api';
import { CardComponent } from './components/card/card.component';



@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AcoesInMemoryApi),
  ],
  declarations: [CardComponent],
  exports: [HttpClientModule, CardComponent],
})
export class SharedModule {}
