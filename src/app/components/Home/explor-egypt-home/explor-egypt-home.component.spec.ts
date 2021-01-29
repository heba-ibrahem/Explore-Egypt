import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorEgyptHomeComponent } from './explor-egypt-home.component';

describe('ExplorEgyptHomeComponent', () => {
  let component: ExplorEgyptHomeComponent;
  let fixture: ComponentFixture<ExplorEgyptHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorEgyptHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorEgyptHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
