import { TestBed } from '@angular/core/testing';

import { AcoesStoreService } from './acoes-store.service';

describe('AcoesStoreService', () => {
  let service: AcoesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcoesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
