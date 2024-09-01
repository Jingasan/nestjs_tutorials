import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/entities/user.entity';

/**
 * passport-localのStrategyを利用して認証を行うガード
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // passport-localのStrategyに基づいて認証を行い、その結果を取得
    const result = (await super.canActivate(context)) as boolean;
    // 認証済みの場合
    if (result) {
      // 認証されたユーザー情報をセッションに保存
      const request = context.switchToHttp().getRequest();
      await super.logIn(request);
      // ガードを付与したルートへのアクセスを許可
      return true;
    }
    // 未認証の場合
    else {
      // ガードを付与したルートへのアクセスを拒否
      return false;
    }
  }

  // 認証プロセス終了後に呼び出されるメソッド
  // デフォルトでは、UnauthorizedExceptionがスローされるが、
  // このメソッドをオーバーライドすることで、カスタムの動作を定義できる。
  handleRequest(err: Error, user: User, _info: any, context: ExecutionContext) {
    // 認証失敗時
    if (err || !user) {
      // ログインページへリダイレクト
      const response = context.switchToHttp().getResponse();
      return response.redirect('/');
    }
    // 認証成功時：ユーザー情報を返す
    return user;
  }
}
