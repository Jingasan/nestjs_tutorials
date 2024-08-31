import { Member as PrismaMember } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

/**
 * エンティティ
 */
export class Member implements PrismaMember {
  @ApiProperty({ example: 1, description: 'メンバーID' })
  id: number;

  @ApiProperty({ example: 'アルファ太郎', description: 'メンバーの氏名' })
  name: string;

  @ApiProperty({ example: 25, description: 'メンバーの年齢' })
  age: number;

  @ApiProperty({ example: '2024-08-30T18:29:56.170Z', description: '作成日時' })
  created_at: Date;

  @ApiProperty({ example: '2024-08-30T18:32:22.134Z', description: '更新日時' })
  updated_at: Date;
}
