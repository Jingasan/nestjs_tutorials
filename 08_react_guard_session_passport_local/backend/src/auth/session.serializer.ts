import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

/**
 * セッションシリアライザー
 */
@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor() {
    super();
  }

  /**
   * セッションにユーザー情報を格納
   * @param user
   * @param done
   */
  serializeUser(user: any, done: (err: Error, id: number) => void): void {
    done(null, user);
  }

  /**
   * セッションからユーザー情報を取得
   * @param user
   * @param done
   */
  deserializeUser(user: any, done: (err: Error, user: any) => void): void {
    done(null, user);
  }
}
