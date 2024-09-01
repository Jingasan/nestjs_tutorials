/**
 * useGlobalGuards()：グローバルガード
 * アプリケーション全体のすべてのコントローラに対してGuardを適用する。
 *
 * https://docs.nestjs.com/guards#binding-guards
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AuthGuard } from './guard/auth/auth.guard';

/**
 * NestJS起動処理
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();
