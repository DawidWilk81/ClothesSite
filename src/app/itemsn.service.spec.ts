import { TestBed } from '@angular/core/testing';

import { ItemsnService } from './itemsn.service';

describe('ItemsnService', () => {
  let service: ItemsnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
