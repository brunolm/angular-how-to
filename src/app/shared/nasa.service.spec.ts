import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { NasaService } from './nasa.service';

describe('NasaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NasaService],
    });
  });

  it('should be created', inject([NasaService], (service: NasaService) => {
    expect(service).toBeTruthy();
  }));
});
