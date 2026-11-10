import { TestBed } from '@angular/core/testing';

import { ObraService } from './obra';

describe('Obra', () => {
  let service: ObraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
