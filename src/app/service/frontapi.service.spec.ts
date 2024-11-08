import { TestBed } from '@angular/core/testing';

import { FrontapiService } from './frontapi.service';

describe('FrontapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontapiService = TestBed.get(FrontapiService);
    expect(service).toBeTruthy();
  });
});
