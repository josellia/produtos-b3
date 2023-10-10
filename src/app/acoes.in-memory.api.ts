import {InMemoryDbService} from 'angular-in-memory-web-api';

export class AcoesInMemoryApi implements InMemoryDbService {
  createDb(){
    return {
      acoes: [
        {
          id: 1,
          nome: 'CEMIG4',
          quantidade: 100,
          preco: 12.45,
          pvp: 1.15
        },

        {
          id: 2,
          nome: 'ITSA4',
          quantidade: 100,
          preco: 9.45,
          pvp: 1.12
        }
      ],

    }
  }
}
