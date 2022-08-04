import { Module } from '@nestjs/common';
import { PrerenderController } from './prerender.controller';
import { PrerenderService } from './prerender.service';

@Module({
  controllers: [PrerenderController],
  providers: [PrerenderService]
})
export class PrerenderModule {}
