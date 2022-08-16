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
      url: process.env.REDIS_URL,
      // host: process.env.REDIS_HOST,
      // port: process.env.REDIS_PORT,
      // auth_pass: process.env.REDIS_PASSWORD,
      // db: process.env.REDIS_DB,
      ttl: 600
    }),
  ],
})
export class PrerenderModule {}
