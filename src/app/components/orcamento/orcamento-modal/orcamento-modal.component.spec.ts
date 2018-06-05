import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoModalComponent } from './orcamento-modal.component';

describe('OrcamentoModalComponent', () => {
  let component: OrcamentoModalComponent;
  let fixture: ComponentFixture<OrcamentoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
