import { Acao } from '../../../shared/models/acoes.interface';
import { Store } from '../Store';
import { Injectable } from '@angular/core';
import { CoreApiService } from '../../services/core.api.service';

import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AcoesStoreService extends Store<Acao[]> {
  constructor(private coreApiSerice: CoreApiService<Acao>) {
    super();
  }


  init = (): void => {
    if (this.getAll()) { return; }

    this.coreApiSerice.findAll(`${environment.urlBase}/?_sort=id&_order=desc`).pipe(
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
        const acoesIndex = this.getAll().findIndex(item => item.id === acaoId);
        acoes.splice(acoesIndex, 1);

        this.store(acoes);
      })
    );

    update$ = (acaoId: number | any, acao: Acao) => this.coreApiSerice
    .patch(environment.urlBase, acaoId, acao)
    .pipe(
      tap(resAcao => {
        const acoes = this.getAll();
        const acaoIndex = this.getAll().findIndex(item => item.id === acaoId);
        acoes[acaoIndex] = {
          ...acao,
          id: resAcao.id,
        };

        this.store(acoes);
      })
    );
}
