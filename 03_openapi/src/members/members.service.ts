import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

/**
 * メンバーサービス
 */
@Injectable()
export class MembersService {
  private members: Member[] = [];
  private memberCount = 0;

  /**
   * メンバー情報の登録
   * @param createMemberDto 登録するメンバー情報
   * @returns 登録したメンバー情報
   */
  create(createMemberDto: CreateMemberDto): Member {
    const id = this.memberCount++;
    const name = createMemberDto.name;
    const age = createMemberDto.age;
    const member: Member = { id, name, age };
    this.members.push(member);
    return member;
  }

  /**
   * 全メンバーの取得
   * @returns 全メンバー情報
   */
  findAll(): Member[] {
    return this.members;
  }

  /**
   * 指定IDのメンバー情報の取得
   * @param id メンバーID
   * @returns メンバー情報
   */
  findOne(id: number): Member {
    // 指定IDのメンバー情報を取得
    const member = this.members.find((user) => user.id === id);
    // 指定IDでメンバーが見つからない場合は400エラー
    if (!member) throw new BadRequestException({ cause: 'USER_NOT_FOUND' });
    return member;
  }

  /**
   * 指定IDのメンバー情報の更新
   * @param id 更新対象のメンバーID
   * @param updateMemberDto 更新するメンバー情報
   * @returns 更新したメンバーの情報
   */
  update(id: number, updateMemberDto: UpdateMemberDto): Member {
    // 指定IDのメンバーが存在するかチェック
    this.findOne(id);
    // 指定IDのメンバー情報を更新
    const name = updateMemberDto.name;
    const age = updateMemberDto.age;
    const member: Member = { id, name, age };
    this.members = this.members.map((user) => (user.id === id ? member : user));
    return member;
  }

  /**
   * 指定IDのメンバー情報の削除
   * @param id メンバーID
   * @returns 削除したメンバー情報
   */
  remove(id: number): Member {
    // 指定IDのメンバーが存在するかチェック
    const member = this.findOne(id);
    // 指定IDのメンバーを削除
    this.members = this.members.filter((member) => member.id !== id);
    return member;
  }
}
