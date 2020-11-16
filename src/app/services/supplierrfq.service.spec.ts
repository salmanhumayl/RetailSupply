import { TestBed } from '@angular/core/testing';

import { SupplierrfqService } from './supplierrfq.service';

describe('SupplierrfqService', () => {
  let service: SupplierrfqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierrfqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
