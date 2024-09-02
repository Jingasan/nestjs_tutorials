import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * passport-localのStrategyを利用して認証を行うガード
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // passport-localのStrategyに基づいて認証を行い、その結果を取得
    const result = (await super.canActivate(context)) as boolean;
    // 認証されたユーザー情報をセッションに保存
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    // 認証結果を返す
    // true：ガードを付与したルートへのアクセスを許可
    // false：ガードを付与したルートへのアクセスを拒否(403 Unauthorized Errorを返す)
    return result;
  }
}
