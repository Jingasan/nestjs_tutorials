import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { PrismaService } from '../prisma.service';

@Module({
  // Controllerの指定
  controllers: [MembersController],
  // Serviceの指定
  providers: [MembersService, PrismaService],
})
export class MembersModule {}
