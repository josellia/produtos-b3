import { TestBed } from '@angular/core/testing';
import { AcoesStoreService } from './acoes-store.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('AcoesStoreService', () => {
  let service: AcoesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AcoesStoreService]
    });
    service = TestBed.inject(AcoesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
