import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';

import { SystemService } from './system.service';

@ApiTags('System')
@Controller('/system')
export class SystemController {
  constructor(
    private systemService: SystemService,
  ) {}

  @Get('/nestjs')
  @HealthCheck()
  check() {
    return this.systemService.check();
  }


  @Get('/prerender')
  @HealthCheck()
  prerender() {
    return this.systemService.prerender();
  }
}
