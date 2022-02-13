import { TestBed } from '@angular/core/testing';

import { GameGRService } from './game-gr.service';

describe('GameGRService', () => {
  let service: GameGRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameGRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
