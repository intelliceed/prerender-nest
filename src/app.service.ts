import axios from 'axios';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

   async main(): Promise<any> {
    try{
      // TODO Setup url for prerender (your local IP)
      const response = await axios.get('http://192.168.0.245:7070/render?url=https://www.example.com/')
      return response.data;
    } catch(e){
      console.log(e)
    }
    // await this.cacheManager.set('a', 123)
    // await this.cacheManager.get('a')
    return 'NoData';
  }
}
