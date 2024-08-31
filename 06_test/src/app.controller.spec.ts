import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// テスト区分
describe('UnitTest: AppController', () => {
  let appService: AppService;

  // テストの前準備
  beforeEach(async () => {
    // AppServiceをモックに差し替え
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AppService,
          useValue: {
            // getHello関数をモックに差し替え
            getHello: jest.fn().mockReturnValue('MOCK: Hello World!'),
          },
        },
      ],
    }).compile();
    appService = app.get<AppService>(AppService);
  });

  // テスト１
  it('should return "MOCK: Hello World!"', () => {
    const controller = new AppController(appService);
    // テスト項目
    expect(controller.getHello()).toBe('MOCK: Hello World!');
  });
});
