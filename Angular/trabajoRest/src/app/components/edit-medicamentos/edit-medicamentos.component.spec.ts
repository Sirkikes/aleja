import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicamentosComponent } from './edit-medicamentos.component';

describe('EditMedicamentosComponent', () => {
  let component: EditMedicamentosComponent;
  let fixture: ComponentFixture<EditMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
