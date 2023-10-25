import { Acao } from './../../../shared/models/acoes.interface';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AcoesStoreService } from './acoes-store.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreApiService } from '../../services/core.api.service';
import { of } from 'rxjs';


describe('AcoesStoreService', () => {
  let service: AcoesStoreService;
  let coreApiService: CoreApiService<Acao> ;
  let acoesStoreService: AcoesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AcoesStoreService, CoreApiService]
    });
    service = TestBed.inject(AcoesStoreService);
    coreApiService = TestBed.inject(CoreApiService);
    acoesStoreService = TestBed.inject(AcoesStoreService)
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('Quando a função init for chamada deve retornar a url da api', () => {
    const acao: Acao[] = [
    {
      id: 1,
      nome: 'CEMIG4',
      quantidade: 100,
      preco: 12.45,
      pvp: 1.15,
    }
  ];

    const spy = jest.spyOn(coreApiService, 'findAll').mockReturnValue(of(acao));

    service.init();

    expect(spy).toHaveBeenCalledWith('http://localhost:3000/acoes/?_sort=id&_order=desc');
  });

  it('Quando a função init for chamada deve invocar o getAll pelo menos uma vez', () => {
    const acao: Acao[] = [
      {
        id: 1,
        nome: 'CEMIG4',
        quantidade: 100,
        preco: 12.45,
        pvp: 1.15,
      }
    ];
    const spy = jest.spyOn(acoesStoreService, 'getAll').mockReturnValue(acao);

    service.init();

    expect(spy).toHaveBeenCalledOnceWith(1);
  });

  it('Quando a função create$ for chamada deve preencher os dados', () => {
    const acao: Acao =
    {
      id: 1,
      nome: 'CEMIG4',
      quantidade: 100,
      preco: 12.45,
      pvp: 1.15,
    };

    const spy = jest.spyOn(coreApiService, 'post').mockReturnValue(of(acao));

    service.create$(acao);

    expect(spy).toHaveBeenCalledWith('http://localhost:3000/acoes', acao);
  });

  it('Quando a função  delete$ for chamada deve remover os dados', fakeAsync(() => {
    const acao: Acao =
    {
      id: 1,
      nome: 'CEMIG4',
      quantidade: 100,
      preco: 12.45,
      pvp: 1.15,
    };

    const acaoArray: Acao[] = [
      {
        id: 1,
        nome: 'CEMIG4',
        quantidade: 100,
        preco: 12.45,
        pvp: 1.15,
      },

      {
        id: 2,
        nome: 'VALE3',
        quantidade: 200,
        preco: 12.45,
        pvp: 1.15,
      }
    ];
    const spy = jest.spyOn(coreApiService, 'delete').mockReturnValue(of(acao));
    const spyGetAll = jest.spyOn(acoesStoreService, 'getAll').mockReturnValue(acaoArray);
    const spyStore = jest.spyOn(acoesStoreService, 'store');

    service.delete$(acao.id).subscribe((resp) => {
      expect(resp).toEqual(acao);
    });

    tick(200);

    expect(spy).toHaveBeenCalledWith('http://localhost:3000/acoes', 1);
    expect(spyGetAll).toHaveBeenCalledOnceWith(2);
    expect(spyStore).toHaveBeenCalledWith(acaoArray);
  }));
});
