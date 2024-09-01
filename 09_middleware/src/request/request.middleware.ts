import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * ミドルウェア
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // ロガーの作成
  private readonly logger = new Logger(LoggerMiddleware.name);

  // ミドルウェアでのメイン処理
  use(req: Request, _: Response, next: () => void): void {
    // ロガーにリクエスト情報を出力
    const { body } = req;
    const msg = `api request [url=${req.url}, method=${
      req.method
    }, body=${JSON.stringify(body)}, ip=${req.ip}]`;
    this.logger.debug(msg);
    next();
  }
}
