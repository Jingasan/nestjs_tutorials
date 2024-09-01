import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Appコントローラ
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloWorld(): string {
    return this.appService.getHelloWorld();
  }
}
