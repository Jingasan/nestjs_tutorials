import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  /**
   * メンバー情報の登録
   * @param createMemberDto 登録するメンバー情報
   * @returns 登録したメンバー情報
   */
  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const name = createMemberDto.name;
    const age = createMemberDto.age;
    return await this.prisma.member.create({ data: { name, age } });
  }

  /**
   * 全メンバーの取得
   * @returns 全メンバー情報
   */
  async findAll(): Promise<Member[]> {
    return await this.prisma.member.findMany();
  }

  /**
   * 指定IDのメンバー情報の取得
   * @param id メンバーID
   * @returns メンバー情報
   */
  async findOne(id: number): Promise<Member> {
    return await this.prisma.member.findUnique({ where: { id } });
  }

  /**
   * 指定IDのメンバー情報の更新
   * @param id 更新対象のメンバーID
   * @param updateMemberDto 更新するメンバー情報
   * @returns 更新したメンバーの情報
   */
  async update(id: number, updateMemberDto: UpdateMemberDto): Promise<Member> {
    const name = updateMemberDto.name;
    const age = updateMemberDto.age;
    return await this.prisma.member.update({
      data: { name, age },
      where: { id },
    });
  }

  /**
   * 指定IDのメンバー情報の削除
   * @param id メンバーID
   * @returns 削除したメンバー情報
   */
  async remove(id: number): Promise<Member> {
    return await this.prisma.member.delete({ where: { id } });
  }
}
