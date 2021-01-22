import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanProgramComponent } from './plan-program.component';

describe('PlanProgramComponent', () => {
  let component: PlanProgramComponent;
  let fixture: ComponentFixture<PlanProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
