import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

// テスト区分
describe('AppController (e2e)', () => {
  let app: INestApplication;

  // テストの前準備
  beforeEach(async () => {
    // NestJSアプリを作成
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // テスト１
  it('/ (GET)', () => {
    // テスト項目
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!'); // APIの実行結果を検証
  });
});
