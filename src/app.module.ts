import type { ClientOpts } from 'redis';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrerenderModule } from './prerender/prerender.module';

@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      auth_pass: process.env.REDIS_PASSWORD,
      db: 0,
      ttl: 600
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    PrerenderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
