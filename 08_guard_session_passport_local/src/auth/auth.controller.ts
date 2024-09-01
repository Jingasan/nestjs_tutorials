import { Controller, UseGuards, Get, Post, Req, Res } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { Request, Response } from 'express';

/**
 * Authコントローラ
 */
@Controller('auth')
export class AuthController {
  /**
   * ログインAPI
   * @param res レスポンス
   */
  @UseGuards(LocalAuthGuard) // 認証を行うガードを設定
  @Post('login')
  async login(@Res() res: Response) {
    res.redirect('/users'); // 認証成功時はユーザーページにリダイレクト
  }

  /**
   * ログアウトAPI
   * @param req
   * @param res
   */
  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response): Promise<void> {
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
