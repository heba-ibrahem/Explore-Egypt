import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTripHomeComponent } from './plan-trip-home.component';

describe('PlanTripHomeComponent', () => {
  let component: PlanTripHomeComponent;
  let fixture: ComponentFixture<PlanTripHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanTripHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTripHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
