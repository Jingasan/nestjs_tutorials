import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, MinLength } from 'class-validator';

/**
 * DTO
 */
export class UpdateMemberDto {
  @ApiProperty({ example: 'アルファ太郎', description: 'メンバーの氏名' })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({ example: 25, description: 'メンバーの年齢' })
  @IsInt()
  @Min(0)
  age: number;
}
