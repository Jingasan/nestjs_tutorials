import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return this.configService.get<string>('ENV_VALUE'); // 環境変数値を取得
  }
}
