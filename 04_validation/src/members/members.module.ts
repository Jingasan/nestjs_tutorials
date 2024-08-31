import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';

/**
 * メンバーモジュール
 */
@Module({
  // Controllerの指定
  controllers: [MembersController],
  // Serviceの指定
  providers: [MembersService],
})
export class MembersModule {}
