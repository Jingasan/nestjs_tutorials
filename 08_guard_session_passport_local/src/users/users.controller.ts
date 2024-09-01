import { Controller, UseGuards, Get, Req } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { Request } from 'express';
import { User } from '../users/entities/user.entity';
import {
  ApiTags,
  ApiProduces,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

/**
 * Usersコントローラ
 */
@Controller('users')
@ApiTags('/users')
export class UsersController {
  /**
   * ユーザーページを返すAPI
   * @param req リクエスト
   * @returns ユーザーページ
   */
  @UseGuards(AuthenticatedGuard)
  @Get()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'ユーザーページ取得API' })
  @ApiResponse({ status: 200, description: 'ユーザーページ' })
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
