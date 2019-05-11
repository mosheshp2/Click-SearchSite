import { TestBed } from '@angular/core/testing';

import { SearchSrvService } from './search-srv.service';

describe('SearchSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchSrvService = TestBed.get(SearchSrvService);
    expect(service).toBeTruthy();
  });
});
