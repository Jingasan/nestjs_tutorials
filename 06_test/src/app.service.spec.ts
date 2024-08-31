import { AppService } from './app.service';

// テスト区分
describe('UnitTest: AppService', () => {
  // テストの前準備
  beforeEach(() => {});

  // テスト１
  it('should return "Hello World!"', () => {
    const appService = new AppService();
    // テスト項目
    expect(appService.getHello()).toBe('Hello World!');
  });
});
