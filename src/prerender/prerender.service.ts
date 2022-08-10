import axios from 'axios';
import { Cache } from 'cache-manager';
import sanitizeHtml from 'sanitize-html';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

export interface PrerenderOptions {
  url: string
  renderType: string
  userAgent: string
  fullpage: string
  width: string
  height: string
  followRedirects: string
  javascript: string
}

@Injectable()
export class PrerenderService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async get(options: PrerenderOptions): Promise<any> {
    const record = await this.cacheManager.get(options.url);
    if (record) {
      return record
    } else {
      return this.render(options);
    }
  }

  async refresh(options: PrerenderOptions): Promise<any> {
    return this.render(options);
  }

  async render(options: PrerenderOptions): Promise<any> {
    try {
      const params = new URLSearchParams();
      for(const key in options) {
        params.append(key, options[key]);
      }
      const response = await axios.get(`${process.env.PRERENDER_URL}/render?${params}`)
      const renderedPage = sanitizeHtml(response.data, {
        exclusiveFilter: function(frame) {
          return frame.tag === 'link' && frame.attribs.rel === 'stylesheet';
        },
        allowedAttributes: false,
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['head', 'meta', 'title', 'link']),
      });
      await this.cacheManager.set(options.url, renderedPage);
      return renderedPage
    } catch(e){
      console.log(e)
    }
  }
}
