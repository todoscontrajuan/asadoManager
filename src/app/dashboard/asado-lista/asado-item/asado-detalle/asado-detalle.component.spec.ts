import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsadoDetalleComponent } from './asado-detalle.component';

describe('AsadoDetalleComponent', () => {
  let component: AsadoDetalleComponent;
  let fixture: ComponentFixture<AsadoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsadoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsadoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
