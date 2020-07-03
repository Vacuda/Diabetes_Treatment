import { TestBed } from '@angular/core/testing';

import { SharedBinService } from './shared-bin.service';

describe('SharedBinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedBinService = TestBed.get(SharedBinService);
    expect(service).toBeTruthy();
  });
});
