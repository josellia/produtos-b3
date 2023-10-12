import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AcoesStoreService } from '@core/store/acoes/acoes-store.service';
import { CadastroAcoesComponent } from './cadastro-acoes.component';
import { ContainerComponent } from '@shared/templates/container/container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Acao } from '@shared/models/acoes.interface';
import { FormErrorService } from '@core/services/erros/form-error.service';

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
      providers: [AcoesStoreService, FormErrorService],
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
    jest.spyOn(router, 'navigate');

    fixture.detectChanges();
    component.redirecionaListaAcoes();

    expect(router.navigate).toHaveBeenCalledWith(['/list-acoes']);
  });

});


