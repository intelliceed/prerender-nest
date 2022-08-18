import { Cache } from 'cache-manager';
import { firstValueFrom } from 'rxjs';
import sanitizeHtml from 'sanitize-html';
import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

export interface PrerenderOptions {
  url: string;
  renderType: string;
  userAgent: string;
  fullpage: string;
  width: string;
  height: string;
  followRedirects: string;
  javascript: string;
}

@Injectable()
export class PrerenderService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly httpService: HttpService
  ) {}

  async get(options: Partial<PrerenderOptions>): Promise<any> {
    console.log(1);
    try {
      const record = await this.cacheManager.get(options.url);
      console.log(2);
      if (record) {
        return record;
      } else {
        return this.render(options);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async refresh(options: Partial<PrerenderOptions>): Promise<any> {
    return this.render(options);
  }

  async render(options: Partial<PrerenderOptions>): Promise<any> {
    try {
      const params = new URLSearchParams();
      for(const key in options) {
        params.append(key, options[key]);
      }
      const $response = await this.httpService.get(`${process.env.PRERENDER_URL}/render?${params}`)
      const response = await firstValueFrom($response);

      const renderedPage = sanitizeHtml(response.data, {
        exclusiveFilter: function(frame) {
          return frame.tag === 'link' && frame.attribs.rel === 'stylesheet';
        },
        allowedAttributes: false,
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['head', 'meta', 'title', 'link']),
      });
      await this.cacheManager.set(options.url, renderedPage);
      console.log(renderedPage)
      return renderedPage;
    } catch (e) {
      console.log(e);
    }
  }
}
