import { TestBed } from '@angular/core/testing';

import { InfoPageService } from './info-page.service';

describe('InfoPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoPageService = TestBed.get(InfoPageService);
    expect(service).toBeTruthy();
  });
});
