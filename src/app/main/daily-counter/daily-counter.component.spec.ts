import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCounterComponent } from './daily-counter.component';

describe('DailyCounterComponent', () => {
  let component: DailyCounterComponent;
  let fixture: ComponentFixture<DailyCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyCounterComponent]
    });
    fixture = TestBed.createComponent(DailyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
