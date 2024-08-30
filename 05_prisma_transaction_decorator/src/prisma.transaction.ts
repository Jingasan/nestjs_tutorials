import { PrismaService } from './prisma.service';

/**
 * トランザクションデコレーター
 * @returns デコレーターを付与したメソッドの実行結果
 */
export function Transaction() {
  return function (
    _target: object,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    const originalMethod = descriptor.value as Function;
    descriptor.value = async function (
      this: { prismaService: PrismaService },
      ...args: any[]
    ) {
      const prismaService = this.prismaService;
      // PrismaServiceでトランザクションを管理
      return prismaService.runInTransaction(async (prisma: PrismaService) => {
        // prismaServiceインスタンスを入れ替える
        this.prismaService = prisma;
        // トランザクションデコレーターでラップされた元のメソッドを呼び出し
        const result = await originalMethod.apply(this, args);
        // prismaServiceインスタンスを元に戻す
        this.prismaService = prismaService;
        return result;
      });
    };
  };
}
