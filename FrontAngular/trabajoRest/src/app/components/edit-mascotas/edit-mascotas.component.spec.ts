import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMascotasComponent } from './edit-mascotas.component';

describe('EditMascotasComponent', () => {
  let component: EditMascotasComponent;
  let fixture: ComponentFixture<EditMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
