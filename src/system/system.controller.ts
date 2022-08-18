import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';

import { SystemService } from './system.service';

@ApiTags('System')
@Controller('/')
export class SystemController {
  constructor(
    private systemService: SystemService,
  ) {}

  @Get('/health')
  @HealthCheck()
  health() {
    return this.systemService.check();
  }
}
