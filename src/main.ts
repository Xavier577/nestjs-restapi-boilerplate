import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerInit } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerInit(app);

  await app.listen(9000);

  const appUrl = await app.getUrl();

  Logger.log(`app is running on ${appUrl}`, 'NestApplication');
}
bootstrap();
