import type { ClientOpts } from 'redis';
import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

import { PrerenderService } from './prerender.service';
import { PrerenderController } from './prerender.controller';

@Module({
  controllers: [PrerenderController],
  providers: [PrerenderService],
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      auth_pass: process.env.REDIS_PASSWORD,
      db: 0,
      ttl: 600
    }),
  ],
})
export class PrerenderModule {}
