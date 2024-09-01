import {
  Controller,
  UseGuards,
  Get,
  Post,
  HttpCode,
  Req,
  Res,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthenticatedGuard } from './authenticated.guard';
import { Request, Response } from 'express';
import { User } from '../users/entities/user.entity';

@Controller()
export class AuthController {
  @Get('login')
  async loginPage() {
    return `<html>
      <body>
        <form action="/login" method="post">
          <input type="text" name="username" placeholder="Username" required><br>
          <input type="password" name="password" placeholder="Password" required><br>
          <button type="submit">Login</button>
        </form>
      </body>
    </html>`;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Res() res: Response) {
    return res.redirect('user');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('user')
  @HttpCode(200)
  user(@Req() req: Request) {
    const user = req.user as User;
    return `<html>
      <body>
        <div>Login Username: ${user.username}</div>
        <div><a href="/logout">logout</a></div>
      </body>
    </html>`;
  }

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
      res.redirect('/');
    });
  }
}
