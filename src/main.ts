import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function main () {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  return app;
}

main().then(async (app) => {
  console.log(`Application is running on: ${await app.getUrl()}`);
});
