import { Controller, UseGuards, Get, Req } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { Request } from 'express';
import { User } from '../users/entities/user.entity';

/**
 * Usersコントローラ
 */
@Controller('users')
export class UsersController {
  /**
   * ユーザーページを返すAPI
   * @param req リクエスト
   * @returns ユーザーページ
   */
  @UseGuards(AuthenticatedGuard)
  @Get()
  user(@Req() req: Request) {
    const user = req.user as User;
    return `<html>
		  <body>
			<div>Login Username: ${user.username}</div>
			<div><a href="/auth/logout">logout</a></div>
		  </body>
		</html>`;
  }
}
