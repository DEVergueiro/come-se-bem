import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app-module';
import { swaggerConfig } from './infrastructure/configs/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://come-se-bem.herokuapp.com',
  });

  // API Documentation
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  // Launching API
  await app.listen(process.env.PORT || 3333, () => {
    Logger.log('Starting API on port 3333 🚀', 'Bootstrap');
  });
}
bootstrap();
