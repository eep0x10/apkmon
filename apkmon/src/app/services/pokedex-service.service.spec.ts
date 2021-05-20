import { TestBed } from '@angular/core/testing';

import { PokedexServiceService } from './pokedex-service.service';

describe('PokedexServiceService', () => {
  let service: PokedexServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
