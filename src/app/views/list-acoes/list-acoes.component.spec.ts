import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListAcoesComponent } from './list-acoes.component';
import { AcoesStoreService } from '@core/store/acoes/acoes-store.service';

describe('ListAcoesComponent', () => {
  let component: ListAcoesComponent;
  let acoesStoreService: AcoesStoreService;

  let fixture: ComponentFixture<ListAcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListAcoesComponent],
      providers: [AcoesStoreService],
    });
    fixture = TestBed.createComponent(ListAcoesComponent);
    acoesStoreService = TestBed.inject(AcoesStoreService);

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Quando o ciclo de vida for iniciado deve trazer os dados', () => {
    jest.spyOn(acoesStoreService, 'getAll$');

    fixture.detectChanges();
    component.ngOnInit();

    expect(acoesStoreService.getAll$).toHaveBeenCalled();
  });
});
