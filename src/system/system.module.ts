import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';

import { PrerenderModule } from '../prerender/prerender.module';

import { SystemService } from './system.service';
import { SystemController } from './system.controller';

@Module({
  providers: [SystemService],
  controllers: [SystemController],
  imports: [TerminusModule, HttpModule, PrerenderModule],
})
export class SystemModule {}
