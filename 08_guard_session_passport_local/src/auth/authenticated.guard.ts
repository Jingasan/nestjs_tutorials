import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

/**
 * 認証済みかどうかのチェックを行うガード
 * コントローラで認証が必要なメソッドに対して付与する。
 */
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    // 現在のHTTPリクエストオブジェクトを取得
    const request = context.switchToHttp().getRequest();
    // 認証済みの場合
    if (request.isAuthenticated()) {
      // ガードを付与したルートへのアクセスを許可
      return true;
    }
    // 未認証の場合
    else {
      const response = context.switchToHttp().getResponse();
      response.redirect('/login'); // 認証されていない場合にログインページへリダイレクト
      // ガードを付与したルートへのアクセスを拒否
      return false;
    }
  }
}
