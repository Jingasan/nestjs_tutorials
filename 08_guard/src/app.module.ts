import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';

/**
 * Appモジュール
 */
@Module({
  imports: [AnimalModule],
  // モジュールに対するコントローラの指定
  controllers: [AppController],
  // モジュールに対するプロバイダ（サービス）の指定
  providers: [AppService],
})
export class AppModule {}
