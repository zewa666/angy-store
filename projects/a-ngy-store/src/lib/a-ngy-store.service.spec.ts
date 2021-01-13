import { TestBed } from '@angular/core/testing';

import { ANGyStoreService } from './a-ngy-store.service';

describe('ANGyStoreService', () => {
  let service: ANGyStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ANGyStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
