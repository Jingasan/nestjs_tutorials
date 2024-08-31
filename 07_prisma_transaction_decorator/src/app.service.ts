import { Injectable } from '@nestjs/common';

/**
 * Appサービス
 */
@Injectable()
export class AppService {
  /**
   * Hello World!を返す関数
   * @returns Hello World!
   */
  getHello(): string {
    return 'Hello World!';
  }
}
