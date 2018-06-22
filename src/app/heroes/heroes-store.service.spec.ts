import { inject, TestBed } from '@angular/core/testing';

import { HeroesStoreService } from './heroes-store.service';

describe('HeroesStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesStoreService],
    });
  });

  it('should be created', inject([HeroesStoreService], (service: HeroesStoreService) => {
    expect(service).toBeTruthy();
  }));
});
