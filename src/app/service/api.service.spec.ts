import { TestBed } from '@angular/core/testing';

import { StudybuddyService } from './api.service';

describe('StudybuddyService', () => {
  let service: StudybuddyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudybuddyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
