import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult, HealthCheckError } from '@nestjs/terminus';

@Injectable()
export class PrerenderHealthIndicator extends HealthIndicator {
  async isHealthy(key: string, isHealthy): Promise<HealthIndicatorResult> {
    const result = this.getStatus(key, isHealthy);
    if (isHealthy) {
      return result;
    } else {
      throw new HealthCheckError('Prerender has been failed', result);
    }
  }
}
