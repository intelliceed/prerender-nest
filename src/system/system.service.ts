import { Injectable } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

import { PrerenderService } from '../prerender/prerender.service';
import { PrerenderHealthIndicator } from '../prerender/prerender.heath';

@Injectable()
export class SystemService {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private readonly prerenderService: PrerenderService,
    private prerenderHealthIndicator: PrerenderHealthIndicator
  ) {}

  check() {
    return this.health.check([
      async () => await this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      async () => await this.prerenderHealthIndicator.isHealthy(
        'prerender',
        await this.prerenderService.render({
          url: 'https://example.com/'
        })
      ),
    ]);
  }
}
