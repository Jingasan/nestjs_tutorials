import { Controller, Get } from '@nestjs/common';
import {
  ApiTags,
  ApiProduces,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

/**
 * Appコントローラ
 */
@Controller()
@ApiTags('/')
export class AppController {
  constructor() {}

  /**
   * ログインページを返すAPI
   * @returns ログインページ
   */
  @Get()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'ログインページ取得API' })
  @ApiResponse({ status: 200, description: 'ログインページ' })
  login(): string {
    return `<html>
      <body>
        <form action="/auth/login" method="post">
          <input type="text" name="username" placeholder="Username" required><br>
          <input type="password" name="password" placeholder="Password" required><br>
          <button type="submit">Login</button>
        </form>
      </body>
    </html>`;
  }
}
