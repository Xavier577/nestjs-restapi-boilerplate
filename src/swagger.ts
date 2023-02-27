import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SwaggerInit(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Nest api')
    .setDescription('API built with nestjs')
    .setVersion('1.0')
    .addTag('API')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);
}
