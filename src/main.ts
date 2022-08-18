import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';

import packageJson from '../package.json';

import { AppModule } from './app.module';

async function main () {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  if (process.env.DEBUG) {
    // SWAGGER Configuration
    const config = new DocumentBuilder()
      .setTitle('Intelliceed Prerender')
      .setDescription('Prerender REST API')
      .setVersion(packageJson.version)
      .addBearerAuth()
      .build();

    const options: SwaggerCustomOptions = {
      customSiteTitle: 'Intelliceed Prerender Swagger UI',
    };

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api', app, document, options);
  }

  await app.listen(PORT);
  return app;
}

main().then(async (app) => {
  console.log(`Application is running on: ${await app.getUrl()}`);
});
