import { Acao } from '@shared/models/acoes.interface';
import { Store } from '../Store';
import { Injectable } from '@angular/core';
import { CoreApiService } from '@core/services/core.api.service';

import { Observable, tap } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AcoesStoreService extends Store<Acao[]> {
  constructor(private coreApiSerice: CoreApiService<Acao>) {
    super();
  }

  init = (): void => {
    if (this.getAll()) { return; }

    this.coreApiSerice.findAll(environment.urlBase).pipe(
      tap(this.store)
    ).subscribe();
  }


  create$ = (acao: Acao): Observable<Acao> =>
    this.coreApiSerice.post(environment.urlBase, acao).pipe(
      tap((resAcao) => {
        this.store([
          ...this.getAll(),
          {
            ...acao,
            id: resAcao.id,
          },
        ]);
      })
    );

    delete$ = (acaoId: number) => this.coreApiSerice
    .delete(environment.urlBase, acaoId)
    .pipe(
      tap(() => {
        const acoes = this.getAll();
        const postIndex = this.getAll().findIndex(item => item.id === acaoId);
        acoes.splice(postIndex, 1);

        this.store(acoes);
      })
    )
}
