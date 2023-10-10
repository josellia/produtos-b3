import { Acao } from '@shared/models/acoes.interface';
import { Store } from '../Store';
import { Injectable } from '@angular/core';
import { CoreApiService } from '@core/services/core.api.service';

import { tap } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AcoesStoreService extends Store<Acao[]> {
  constructor(private coreApiSerice: CoreApiService<Acao>) {
    super();
  }

  init = (): void => {
    if (this.getAll()) {
      return;
    }

    this.coreApiSerice
      .findAll(environment.urlBase)
      .pipe(tap(this.store))
      .subscribe();
  };
}
