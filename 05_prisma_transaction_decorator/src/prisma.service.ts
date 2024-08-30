import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
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

  // AsyncLocalStorage：複数のリクエストがくる場合（非同期処理）でも、
  // リクエスト毎にデータ（コンテキスト）が混ざらないように、
  // そのリクエストの中でデータ（コンテキスト）を安全に共有できるストレージ。
  // ここでは、コンテキストにPrismaClientを指定。
  private readonly asyncLocalStorage = new AsyncLocalStorage<PrismaClient>();

  // トランザクションをAsyncLocalStorageで管理
  async runInTransaction<T>(
    callback: (prisma: PrismaClient) => Promise<T>,
  ): Promise<T> {
    // 既存のトランザクションの取得
    const existingTransaction = this.asyncLocalStorage.getStore();
    // すでにトランザクションが存在する場合、新しいトランザクションを作成せずに、そのまま利用する
    if (existingTransaction) return callback(existingTransaction);
    // 新しいトランザクションを作成
    return this.$transaction(async (prisma: PrismaClient) => {
      return this.asyncLocalStorage.run(prisma, () => callback(prisma));
    });
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
