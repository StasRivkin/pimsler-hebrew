import { TestBed } from '@angular/core/testing';

import { AudioLoaderService } from './audio-loader.service';

describe('AudioLoaderService', () => {
  let service: AudioLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
