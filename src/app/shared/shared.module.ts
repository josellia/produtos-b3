import { NgModule } from "@angular/core";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { AcoesInMemoryApi } from "../acoes.in-memory.api";

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AcoesInMemoryApi)
  ],
  exports: [ HttpClientModule ]
})
export class SharedModule {}
