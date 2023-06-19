import { TestBed } from '@angular/core/testing';

import { DailyCounterService } from './daily-counter.service';

describe('DailyCounterService', () => {
  let service: DailyCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
