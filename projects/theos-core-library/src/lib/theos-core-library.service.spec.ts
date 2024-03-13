import { TestBed } from '@angular/core/testing';

import { TheosCoreLibraryService } from './theos-core-library.service';

describe('TheosCoreLibraryService', () => {
  let service: TheosCoreLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheosCoreLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
