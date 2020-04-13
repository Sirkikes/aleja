import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicamentosComponent } from './list-medicamentos.component';

describe('ListMedicamentosComponent', () => {
  let component: ListMedicamentosComponent;
  let fixture: ComponentFixture<ListMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
