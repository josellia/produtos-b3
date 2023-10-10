

import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreApiService } from './core.api.service';
import { Acao } from '@shared/models/acoes.interface';
import { environment } from '../../../environments/environment';
import { TestBed } from '@angular/core/testing';


describe('CoreApiService', () => {
    let service: CoreApiService<Acao>;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],

        });
        service = TestBed.inject(CoreApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });


    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Quando a função findAll for chamada deve retornar a resposta com sucesso ', (done) => {
      const url = environment.urlBase;
      const acao: Acao[] = [
        {
          id: 1,
          nome: 'CEMIG4',
          quantidade: 100,
          preco: 12.45,
          pvp: 1.15
        }
      ];

      service.findAll(url).subscribe((resp: Acao[]) => {
        expect(resp).toEqual(acao);
        done();
      });

      const req = httpMock.expectOne(url);

      expect(req.request.method).toBe('GET');
      req.flush(acao);
  });
});
