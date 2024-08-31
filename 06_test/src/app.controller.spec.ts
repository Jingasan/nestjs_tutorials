import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// テスト大区分
describe('AppController', () => {
  let appService: AppService;

  // テストの前準備
  beforeEach(async () => {
    // AppServiceをモックに差し替え
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AppService,
          useValue: {
            getHello: jest.fn().mockReturnValue('MOCK: Hello World!'), // getHello関数をモックに差し替え
          },
        },
      ],
    }).compile();
    appService = app.get<AppService>(AppService);
  });

  // テスト小区分
  describe('Hello World', () => {
    // テスト１
    it('should return "Hello World!"', () => {
      const controller = new AppController(appService);
      // テスト項目
      expect(controller.getHello()).toBe('MOCK: Hello World!');
    });
  });
});
