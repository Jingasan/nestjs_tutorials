import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

/**
 * Authサービス
 */
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  /**
   * ユーザーが存在するか、パスワードが合致しているかチェック
   * @param username ユーザー名
   * @param password パスワード
   * @returns ユーザー情報/null
   */
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === password) {
      return { id: user.id, username: user.username };
    }
    return null;
  }
}
