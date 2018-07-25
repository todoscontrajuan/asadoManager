import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAsadoComponent } from './add-asado.component';

describe('AddAsadoComponent', () => {
  let component: AddAsadoComponent;
  let fixture: ComponentFixture<AddAsadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAsadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAsadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
