import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShoppingModule } from './shopping/shopping.module';

/**
 * Appモジュール
 */
@Module({
  imports: [AuthModule, UsersModule, ShoppingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
