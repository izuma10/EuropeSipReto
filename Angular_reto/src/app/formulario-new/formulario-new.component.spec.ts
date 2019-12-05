import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNewComponent } from './formulario-new.component';

describe('FormularioNewComponent', () => {
  let component: FormularioNewComponent;
  let fixture: ComponentFixture<FormularioNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
