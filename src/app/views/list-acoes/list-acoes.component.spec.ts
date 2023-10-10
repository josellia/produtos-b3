import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAcoesComponent } from './list-acoes.component';

describe('ListAcoesComponent', () => {
  let component: ListAcoesComponent;
  let fixture: ComponentFixture<ListAcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAcoesComponent]
    });
    fixture = TestBed.createComponent(ListAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
