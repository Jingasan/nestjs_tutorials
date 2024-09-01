import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

/**
 * Authモジュール
 */
@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      session: true, // Passportに対し、認証状態をセッションに保存するように設定
    }),
  ],
  providers: [AuthService, SessionSerializer, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
