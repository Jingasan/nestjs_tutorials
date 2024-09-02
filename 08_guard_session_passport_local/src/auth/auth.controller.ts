import { Controller, UseGuards, Get, Post, Req, Res } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { Request, Response } from 'express';
import {
  ApiTags,
  ApiProduces,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

/**
 * Authコントローラ
 */
@Controller('auth')
@ApiTags('/auth')
export class AuthController {
  /**
   * ログインAPI
   * @param res レスポンス
   */
  @UseGuards(LocalAuthGuard) // 認証を行うガードを設定
  @Post('login')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'ログインAPI' })
  @ApiResponse({ status: 302, description: 'ユーザーページにリダイレクト' })
  login(@Res() res: Response) {
    res.redirect('/users'); // 認証成功時はユーザーページにリダイレクト
  }

  /**
   * ログアウトAPI
   * @param req
   * @param res
   */
  @Get('logout')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'ログアウトAPI' })
  @ApiResponse({ status: 302, description: 'ログインページにリダイレクト' })
  logout(@Req() req: Request, @Res() res: Response): void {
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
      // ログインページへリダイレクト
      res.redirect('/');
    });
  }
}
