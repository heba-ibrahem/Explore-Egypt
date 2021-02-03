import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreNewEventHomeComponent } from './more-new-event-home.component';

describe('MoreNewEventHomeComponent', () => {
  let component: MoreNewEventHomeComponent;
  let fixture: ComponentFixture<MoreNewEventHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreNewEventHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreNewEventHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
