import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private authService: AuthService) {
    super();
  }

  serializeUser(user: any, done: (err: Error, id: number) => void): void {
    done(null, user);
  }

  async deserializeUser(
    user: any,
    done: (err: Error, user: any) => void,
  ): Promise<void> {
    done(null, user);
  }
}
