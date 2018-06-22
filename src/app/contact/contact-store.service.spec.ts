import { inject, TestBed } from '@angular/core/testing';

import { ContactStoreService } from './contact-store.service';

describe('ContactStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactStoreService],
    });
  });

  it('should be created', inject([ContactStoreService], (service: ContactStoreService) => {
    expect(service).toBeTruthy();
  }));
});
