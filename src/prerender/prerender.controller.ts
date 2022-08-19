import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';

import { PrerenderOptions, PrerenderService } from './prerender.service';

@ApiTags('Prerender')
@Controller('/')
export class PrerenderController {
  constructor (private prerenderService: PrerenderService) {}

  @Get('/refresh')
  refresh (@Query() options: PrerenderOptions) {
    return this.prerenderService.refresh(options);
  }

  @Get('/render')
  get (@Query() options: PrerenderOptions) {
    return this.prerenderService.get(options);
  }
}
