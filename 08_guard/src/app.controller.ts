/**
 * UseGuards()
 * コントローラクラスやコントローラクラスの特定のメソッド付与してGuardを適用するデコレータ
 *
 * https://docs.nestjs.com/guards#binding-guards
 */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guard/auth/auth.guard';

/**
 * Appコントローラ
 */
@Controller()
@UseGuards(AuthGuard) // コントローラクラスのすべてのメソッドにGuardを適用
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Hello World!を返すAPI
   * @returns Hello World!
   */
  // @UseGuards(AuthGuard) // コントローラクラスの特定のメソッドにGuardを適用
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
