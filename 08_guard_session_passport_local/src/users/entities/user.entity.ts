import { ApiProperty } from '@nestjs/swagger';

/**
 * ユーザーエンティティ
 */
export class User {
  @ApiProperty({ example: 1, description: 'ユーザーID' })
  id: number;
  @ApiProperty({ example: 'user', description: 'ユーザー名' })
  username: string;
  @ApiProperty({ example: 'password', description: 'パスワード' })
  password: string;
}
