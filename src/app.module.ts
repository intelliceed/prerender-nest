import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
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
