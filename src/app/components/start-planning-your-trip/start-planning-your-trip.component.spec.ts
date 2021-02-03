import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPlanningYourTripComponent } from './start-planning-your-trip.component';

describe('StartPlanningYourTripComponent', () => {
  let component: StartPlanningYourTripComponent;
  let fixture: ComponentFixture<StartPlanningYourTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPlanningYourTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPlanningYourTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
