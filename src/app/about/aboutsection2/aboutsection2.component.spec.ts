import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutsection2Component } from './aboutsection2.component';

describe('Aboutsection2Component', () => {
  let component: Aboutsection2Component;
  let fixture: ComponentFixture<Aboutsection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aboutsection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutsection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
