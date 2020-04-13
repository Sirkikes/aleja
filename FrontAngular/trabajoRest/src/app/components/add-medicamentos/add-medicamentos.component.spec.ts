import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicamentosComponent } from './add-medicamentos.component';

describe('AddMedicamentosComponent', () => {
  let component: AddMedicamentosComponent;
  let fixture: ComponentFixture<AddMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
