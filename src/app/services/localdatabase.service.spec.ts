import { TestBed } from '@angular/core/testing';

import { LocaldatabaseService } from './localdatabase.service';

describe('LocaldatabaseService', () => {
  let service: LocaldatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaldatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
