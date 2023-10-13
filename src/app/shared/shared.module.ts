import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './templates/container/container.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [CardComponent, ContainerComponent, FilterPipe],
  exports: [HttpClientModule, CardComponent, ContainerComponent, FilterPipe],
})
export class SharedModule {}
