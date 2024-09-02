import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

/**
 * Usersモジュール
 */
@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [],
})
export class UsersModule {}
