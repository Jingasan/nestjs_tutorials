import { Injectable } from '@nestjs/common';

/**
 * Appサービス
 */
@Injectable()
export class AppService {
  getHelloWorld(): string {
    return 'Hello World!';
  }
}
