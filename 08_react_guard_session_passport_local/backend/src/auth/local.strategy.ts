import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

/**
 * Passport Local Strategy
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  /**
   * ユーザー名／パスワードの検証（passport-local Strategyの中で自動的に呼ばれる）
   * @param username ユーザー名
   * @param password パスワード
   * @returns 成功時：ユーザー情報／失敗時：UnauthorizedException
   */
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
