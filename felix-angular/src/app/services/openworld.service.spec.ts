import { TestBed } from '@angular/core/testing';

import { OpenworldService } from './openworld.service';

describe('OpenworldService', () => {
  let service: OpenworldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenworldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
