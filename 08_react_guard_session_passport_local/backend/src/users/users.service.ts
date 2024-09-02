import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

/**
 * Usersサービス
 */
@Injectable()
export class UsersService {
  /**
   * 登録ユーザー情報
   */
  private readonly users = [
    {
      id: 1,
      username: 'user',
      password: 'password',
    },
  ];

  /**
   * ユーザー名で検索してユーザー情報を取得
   * @param username ユーザー名
   * @returns ユーザー情報/null
   */
  async findByUsername(username: string): Promise<User | null> {
    return this.users.find((user) => user.username === username);
  }
}
