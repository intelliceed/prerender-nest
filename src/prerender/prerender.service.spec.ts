import { Test, TestingModule } from '@nestjs/testing';
import { PrerenderService } from './prerender.service';

describe('PrerenderService', () => {
  let service: PrerenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrerenderService],
    }).compile();

    service = module.get<PrerenderService>(PrerenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
