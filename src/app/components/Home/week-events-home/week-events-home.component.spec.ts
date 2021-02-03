import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventsHomeComponent } from './week-events-home.component';

describe('NewEventsHomeComponent', () => {
  let component: NewEventsHomeComponent;
  let fixture: ComponentFixture<NewEventsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEventsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
