import {
  Controller,
  UseGuards,
  Get,
  Post,
  Req,
  HttpCode,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { Request } from 'express';
import {
  ApiTags,
  ApiProduces,
  ApiOperation,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

/**
 * Authコントローラ
 */
@Controller('auth')
@ApiTags('/auth')
export class AuthController {
  /**
   * ログイン確認API
   * @param req
   * @returns ログイン状況
   */
  @Get('isAuthenticated')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'ログイン確認API' })
  @ApiResponse({ status: 200, description: 'ログイン状況' })
  isAuthenticated(@Req() req: Request) {
    return { isAuthenticated: req.isAuthenticated() };
  }

  /**
   * ログインAPI
   * @param req
   * @returns ユーザー情報
   */
  @UseGuards(LocalAuthGuard) // 認証を行うガードを設定
  @Post('login')
  @HttpCode(200)
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'ログインAPI' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'ユーザー情報' })
  login(@Req() req: Request) {
    return req.user;
  }

  /**
   * ログアウトAPI
   * @param req
   */
  @Post('logout')
  @HttpCode(200)
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'ログアウトAPI' })
  @ApiResponse({ status: 200 })
  logout(@Req() req: Request) {
    // ログアウト
    req.logout((err) => {
      if (err) {
        console.error(err);
        return;
      }
      // セッションを削除
      req.session.destroy((err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }
}
