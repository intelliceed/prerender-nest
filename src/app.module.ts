import type { ClientOpts } from 'redis';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrerenderModule } from './prerender/prerender.module';

@Module({
  imports: [
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
