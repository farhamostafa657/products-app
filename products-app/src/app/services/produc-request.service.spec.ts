import { TestBed } from '@angular/core/testing';

import { ProducRequestService } from './produc-request.service';

describe('ProducRequestService', () => {
  let service: ProducRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
