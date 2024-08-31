import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {
  ApiTags,
  ApiProduces,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { Member } from './entities/member.entity';

/**
 * メンバーコントローラ
 */
@Controller('members')
@ApiTags('/members') // APIのタイトル
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  /**
   * メンバーの作成
   * @param createMemberDto メンバー情報
   * @returns
   */
  @Post()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体登録API' })
  @ApiResponse({
    status: 201,
    description: '登録したメンバー設定を返却',
    type: Member,
  })
  async create(@Body() createMemberDto: CreateMemberDto): Promise<Member> {
    return await this.membersService.create(createMemberDto);
  }

  /**
   * 全メンバーの取得
   * @returns
   */
  @Get()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '全体取得API' })
  @ApiResponse({
    status: 200,
    description: '登録済メンバー設定を複数返却',
    type: Member,
  })
  async findAll(): Promise<Member[]> {
    return await this.membersService.findAll();
  }

  /**
   * 指定IDのメンバーの取得
   * @param id メンバーID
   * @returns
   */
  @Get(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体取得API' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '指定されたIDのメンバー設定を返却',
    type: Member,
  })
  @ApiResponse({
    status: 400,
    description: '指定IDのメンバーが存在しない',
    example: { cause: 'USER_NOT_FOUND' },
  })
  async findOne(@Param('id') id: string): Promise<Member> {
    return await this.membersService.findOne(+id);
  }

  /**
   * メンバー情報の更新
   * @param id メンバーID
   * @param updateMemberDto 更新するメンバー情報
   * @returns
   */
  @Patch(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体更新API' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '更新後のメンバー設定を返却',
    type: Member,
  })
  @ApiResponse({
    status: 400,
    description: '指定IDのメンバーが存在しない',
    example: { cause: 'USER_NOT_FOUND' },
  })
  async update(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    return await this.membersService.update(+id, updateMemberDto);
  }

  /**
   * 指定IDのメンバー削除
   * @param id メンバーID
   * @returns
   */
  @Delete(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体削除API' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '削除されたメンバーの設定を返却',
    type: Member,
  })
  @ApiResponse({
    status: 400,
    description: '指定IDのメンバーが存在しない',
    example: { cause: 'USER_NOT_FOUND' },
  })
  async remove(@Param('id') id: string): Promise<Member> {
    return await this.membersService.remove(+id);
  }
}
