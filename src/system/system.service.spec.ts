import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';

import { PrerenderModule } from '../prerender/prerender.module';

import { SystemService } from './system.service';
import { SystemController } from './system.controller';

describe('SystemService', () => {
  let service: SystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemService],
      controllers: [SystemController],
      imports: [TerminusModule, HttpModule, PrerenderModule],
    }).compile();

    service = module.get<SystemService>(SystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
