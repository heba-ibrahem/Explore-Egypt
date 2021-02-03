import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorDepComponent } from './explor-dep.component';

describe('ExplorDepComponent', () => {
  let component: ExplorDepComponent;
  let fixture: ComponentFixture<ExplorDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
