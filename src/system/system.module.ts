import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';

import { PrerenderModule } from '../prerender/prerender.module';

import { SystemService } from './system.service';
import { SystemController } from './system.controller';

@Module({
  imports: [TerminusModule, HttpModule, PrerenderModule],
  controllers: [SystemController],
  providers: [SystemService]
})
export class SystemModule {}
