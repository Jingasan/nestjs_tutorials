import { Injectable } from '@nestjs/common';

/**
 * Appサービス
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
