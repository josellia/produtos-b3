import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AcoesStoreService } from '../../core/store/acoes/acoes-store.service';
import { CadastroAcoesComponent } from './cadastro-acoes.component';
import { ContainerComponent } from '../../shared/templates/container/container.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Acao } from '../../shared/models/acoes.interface';
import { FormErrorService } from '../../../app/core/services/erros/form-error.service';

describe('CadastroAcoesComponent', () => {
  let component: CadastroAcoesComponent;
  let acoesStoreService: AcoesStoreService;
  let router: Router;
  let formErrorService: FormErrorService;
  let fixture: ComponentFixture<CadastroAcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAcoesComponent, ContainerComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [AcoesStoreService, FormErrorService, FormBuilder],
    });
    fixture = TestBed.createComponent(CadastroAcoesComponent);
    acoesStoreService = TestBed.inject(AcoesStoreService);
    router = TestBed.inject(Router);
    formErrorService = TestBed.inject(FormErrorService);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Quando o ciclo de vida for iniciado deve cadastrar os dados', () => {
    jest.spyOn(component, 'cadastrarAcoesForm');

    fixture.detectChanges();
    component.ngOnInit();

    expect(component.cadastrarAcoesForm).toHaveBeenCalled();

  });

  it('Quando a função redirecionaListaAcoes foe executada deve redirecionar para a lista de ações', () => {

    const mockWindow = {
      location: {
        assign() {jest.fn()}
      }
    }
    const spy = jest.spyOn(mockWindow.location, 'assign');

    fixture.detectChanges();
    component.redirecionaListaAcoes();


    expect(spy).toHaveBeenCalledWith('/list-acoes');
  });

  it('Quando a função cadastrarAcoesForm for chamada deve preencher o objeto ', fakeAsync(() => {
    const acao =
      {
        nome: 'CEMIG4',
        quantidade: 100,
        preco: 12.45,
        pvp: 1.15,
      }

    const obj = JSON.stringify(acao);

    fixture.detectChanges();
    component.cadastrarAcoesForm();


    component.acoesForm.controls['nome'].setValue(acao.nome);
    component.acoesForm.controls['quantidade'].setValue(acao.quantidade);
    component.acoesForm.controls['preco'].setValue(acao.preco);
    component.acoesForm.controls['pvp'].setValue(acao.pvp);
    expect(JSON.stringify(component.acoesForm.value)).toEqual(obj);
  }));
});


