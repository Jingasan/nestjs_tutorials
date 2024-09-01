import { Controller, Get } from '@nestjs/common';

/**
 * Appコントローラ
 */
@Controller()
export class AppController {
  constructor() {}

  /**
   * ログインページを返すAPI
   * @returns ログインページ
   */
  @Get()
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
