import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * Guard
 */
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Authorizationヘッダーにトークン「TEST_API_TOKEN」が設定されているかをチェック
    // true: ガードを付与したルートへのアクセスを許可
    // false: ガードを付与したルートへのアクセスを拒否
    const request = context.switchToHttp().getRequest();
    return request.headers.authorization === 'TEST_API_TOKEN';
  }
}
