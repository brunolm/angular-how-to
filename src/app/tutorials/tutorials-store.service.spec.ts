import { inject, TestBed } from '@angular/core/testing';

import { TutorialsStoreService } from './tutorials-store.service';

describe('TutorialsStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorialsStoreService],
    });
  });

  it('should be created', inject([TutorialsStoreService], (service: TutorialsStoreService) => {
    expect(service).toBeTruthy();
  }));
});
