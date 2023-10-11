import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AcoesInMemoryApi } from '../acoes.in-memory.api';
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './templates/container/container.component';



@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AcoesInMemoryApi),
  ],
  declarations: [CardComponent, ContainerComponent],
  exports: [HttpClientModule, CardComponent, ContainerComponent],
})
export class SharedModule {}
