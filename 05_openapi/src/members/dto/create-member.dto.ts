import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO
 */
export class CreateMemberDto {
  @ApiProperty({ example: 'アルファ太郎', description: 'メンバーの氏名' })
  name: string;

  @ApiProperty({ example: 25, description: 'メンバーの年齢' })
  age: number;
}
