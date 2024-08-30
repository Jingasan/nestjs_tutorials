import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SwaggerUIページの有効化
  const config = new DocumentBuilder()
    .setTitle('API仕様書')
    .setDescription('API仕様書のサンプルです。')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // バリデーションの有効化
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
