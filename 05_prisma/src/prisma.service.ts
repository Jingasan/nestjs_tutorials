import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Prismaサービス
 */
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({ log: ['query'] }); // SQLのクエリログを有効化
  }

  /**
   * モジュールが初期化されたときに呼び出されるメソッド
   */
  async onModuleInit() {
    // DBとの接続を確立する
    await this.$connect();
  }

  /**
   * モジュールが破棄されたときに呼び出されるメソッド
   */
  async onModuleDestroy() {
    // DBとの接続を破棄する
    await this.$disconnect();
  }
}
