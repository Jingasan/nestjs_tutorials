import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Appコントローラ
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Hello World!を返すAPI
   * @returns
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
