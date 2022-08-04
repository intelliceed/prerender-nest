import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrerenderModule } from './prerender/prerender.module';

@Module({
  imports: [PrerenderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
