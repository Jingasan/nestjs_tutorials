import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * NestJSアプリの起動処理
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
