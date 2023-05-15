import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingheadComponent } from './pricinghead.component';

describe('PricingheadComponent', () => {
  let component: PricingheadComponent;
  let fixture: ComponentFixture<PricingheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
