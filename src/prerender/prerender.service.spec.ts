import type { ClientOpts } from 'redis';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as redisStore from 'cache-manager-redis-store';

import { PrerenderService } from './prerender.service';
import { PrerenderController } from './prerender.controller';
import { PrerenderHealthIndicator } from './prerender.heath';

describe('PrerenderService', () => {
  let service: PrerenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrerenderController],
      providers: [PrerenderService, PrerenderHealthIndicator],
      exports: [PrerenderService, PrerenderHealthIndicator],
      imports: [
        CacheModule.register<ClientOpts>({
          store: redisStore,
          url: process.env.REDIS_URL,
          ttl: 600
        }),
        HttpModule,
      ],
    }).compile();

    service = module.get<PrerenderService>(PrerenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
