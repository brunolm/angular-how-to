import { inject, TestBed } from '@angular/core/testing';

import { AboutStoreService } from './about-store.service';

describe('AboutStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutStoreService],
    });
  });

  it('should be created', inject([AboutStoreService], (service: AboutStoreService) => {
    expect(service).toBeTruthy();
  }));
});
