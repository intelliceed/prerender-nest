import { Test, TestingModule } from '@nestjs/testing';
import { PrerenderController } from './prerender.controller';

describe('PrerenderController', () => {
  let controller: PrerenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrerenderController],
    }).compile();

    controller = module.get<PrerenderController>(PrerenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
