import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO
 */
export class LoginDto {
  @ApiProperty({ example: 'user', description: 'ユーザー名' })
  username: string;
  @ApiProperty({ example: 'password', description: 'パスワード' })
  password: string;
}
