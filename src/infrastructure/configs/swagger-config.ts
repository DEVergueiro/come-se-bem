import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Come-se Bem Service API.')
  .setVersion('1.0')
  .addTag('order')
  .addTag('product')
  .addBearerAuth()
  .setDescription(
    'This is the documentation of the API consumed by the Come-se Bem frontend app',
  )
  .build();
