import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAcoesComponent } from './cadastro-acoes.component';

describe('CadastroAcoesComponent', () => {
  let component: CadastroAcoesComponent;
  let fixture: ComponentFixture<CadastroAcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAcoesComponent]
    });
    fixture = TestBed.createComponent(CadastroAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
