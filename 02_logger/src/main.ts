import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * アプリの起動処理
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // Loggerの設定：配列に指定したログレベル以上のログが出力される。
    // false: 何も出力しない
    // 指定可能なログレベル：verbose, debug, log, warn, error, fatal
    logger: ['debug'],
  });
  await app.listen(3000);
}
bootstrap();
