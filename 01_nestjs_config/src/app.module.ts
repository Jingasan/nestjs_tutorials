import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'], // 環境変数ファイルの指定
      isGlobal: true, // 設定を全モジュールで利用可能にする
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
