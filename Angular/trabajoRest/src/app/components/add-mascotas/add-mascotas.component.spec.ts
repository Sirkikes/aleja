import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMascotasComponent } from './add-mascotas.component';

describe('AddMascotasComponent', () => {
  let component: AddMascotasComponent;
  let fixture: ComponentFixture<AddMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
