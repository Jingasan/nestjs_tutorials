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
    // Authorizationヘッダーにトークン「TEST_API_TOKEN」が設定されていれば、認証OK
    const request = context.switchToHttp().getRequest();
    return request.headers.authorization === 'TEST_API_TOKEN';
  }
}
