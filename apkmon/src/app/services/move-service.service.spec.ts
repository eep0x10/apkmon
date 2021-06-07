import { TestBed } from '@angular/core/testing';

import { MoveServiceService } from './move-service.service';

describe('MoveServiceService', () => {
  let service: MoveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
