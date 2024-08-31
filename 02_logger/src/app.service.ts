import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

/**
 * Appサービス
 */
@Injectable()
export class AppService {
  // ロガーを作成
  private readonly logger = new Logger(AppService.name);

  /**
   * Hello World!を返すメソッド
   * @returns Hello World!
   */
  getHello(): string {
    // ログレベル「debug」でログを出力
    this.logger.debug('Hello World!');
    return 'Hello World!';
  }
}
