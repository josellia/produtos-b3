import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAcoesComponent } from './editar-acoes.component';

describe('EditarAcoesComponent', () => {
  let component: EditarAcoesComponent;
  let fixture: ComponentFixture<EditarAcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAcoesComponent]
    });
    fixture = TestBed.createComponent(EditarAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
