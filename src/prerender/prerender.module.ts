import type { ClientOpts } from 'redis';
import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

import { PrerenderService } from './prerender.service';
import { PrerenderController } from './prerender.controller';
import { PrerenderHealthIndicator } from './prerender.heath';

@Module({
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
})
export class PrerenderModule {}
