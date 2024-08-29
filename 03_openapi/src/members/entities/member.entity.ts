import { ApiProperty } from '@nestjs/swagger';

export class Member {
  @ApiProperty({ example: 1, description: 'メンバーID' })
  id: number;

  @ApiProperty({ example: 'アルファ太郎', description: 'メンバーの氏名' })
  name: string;

  @ApiProperty({ example: 25, description: 'メンバーの年齢' })
  age: number;
}
