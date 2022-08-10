import { Controller, Get, Query } from '@nestjs/common';

import { PrerenderOptions, PrerenderService } from './prerender.service';

@Controller('prerender')
export class PrerenderController {
  constructor (private prerenderService: PrerenderService) {}

  @Get('/refresh')
  refresh (@Query() options: PrerenderOptions) {
    console.info('/refresh')
    return this.prerenderService.refresh(options);
  }

  @Get('/render')
  get (@Query() options: PrerenderOptions) {
    console.info('/render')
    return this.prerenderService.get(options);
  }
}
