import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './request/request.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * Appモジュール
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '', // ミドルウェアの対象とするパス
      method: RequestMethod.ALL, // ミドルウェアの対象とするHTTPメソッド
    });
  }
}
