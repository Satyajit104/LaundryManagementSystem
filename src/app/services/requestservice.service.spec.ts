import { TestBed } from '@angular/core/testing';

import { RequestserviceService } from './requestservice.service';

describe('RequestserviceService', () => {
  let service: RequestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
