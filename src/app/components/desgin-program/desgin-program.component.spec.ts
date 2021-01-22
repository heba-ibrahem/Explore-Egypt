import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesginProgramComponent } from './desgin-program.component';

describe('DesginProgramComponent', () => {
  let component: DesginProgramComponent;
  let fixture: ComponentFixture<DesginProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesginProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesginProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
