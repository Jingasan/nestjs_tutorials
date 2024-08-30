import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { PrismaService } from '../prisma.service';
import { Transaction } from '../prisma.transaction';

/**
 * メンバーサービス
 */
@Injectable()
export class MembersService {
  constructor(private prismaService: PrismaService) {}

  /**
   * メンバー情報の登録
   * @param createMemberDto 登録するメンバー情報
   * @returns 登録したメンバー情報
   */
  @Transaction()
  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const name = createMemberDto.name;
    const age = createMemberDto.age;
    return await this.prismaService.member.create({ data: { name, age } });
  }

  /**
   * 全メンバーの取得
   * @returns 全メンバー情報
   */
  @Transaction()
  async findAll(): Promise<Member[]> {
    return await this.prismaService.member.findMany();
  }

  /**
   * 指定IDのメンバー情報の取得
   * @param id メンバーID
   * @returns メンバー情報
   */
  @Transaction()
  async findOne(id: number): Promise<Member> {
    const res = await this.prismaService.member.findUnique({ where: { id } });
    return res;
  }

  /**
   * 指定IDのメンバー情報の更新
   * @param id 更新対象のメンバーID
   * @param updateMemberDto 更新するメンバー情報
   * @returns 更新したメンバーの情報
   */
  @Transaction()
  async update(id: number, updateMemberDto: UpdateMemberDto): Promise<Member> {
    const name = updateMemberDto.name;
    const age = updateMemberDto.age;
    return await this.prismaService.member.update({
      data: { name, age },
      where: { id },
    });
  }

  /**
   * 指定IDのメンバー情報の削除
   * @param id メンバーID
   * @returns 削除したメンバー情報
   */
  @Transaction()
  async remove(id: number): Promise<Member> {
    return await this.prismaService.member.delete({ where: { id } });
  }
}
