import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 設定を全モジュールで利用可能にする
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
