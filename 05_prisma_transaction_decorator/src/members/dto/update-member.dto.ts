import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

/**
 * DTO
 */
export class UpdateMemberDto {
  @ApiProperty({ example: 'アルファ太郎', description: 'メンバーの氏名' })
  @IsString()
  name: string;

  @ApiProperty({ example: 25, description: 'メンバーの年齢' })
  @IsNumber()
  age: number;
}
