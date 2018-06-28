import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsadoListaComponent } from './asado-lista.component';

describe('AsadoListaComponent', () => {
  let component: AsadoListaComponent;
  let fixture: ComponentFixture<AsadoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsadoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
