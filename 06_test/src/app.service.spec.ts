// import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

// テスト大区分
describe('AppService', () => {
  // テストの前準備
  beforeEach(() => {});

  // テスト小区分
  describe('Hello World', () => {
    // テスト１
    it('should return "Hello World!"', () => {
      const appService = new AppService();
      // テスト項目
      expect(appService.getHello()).toBe('Hello World!');
    });
  });
  //   describe('root', () => {
  //     it('should return "Hello World!"', () => {
  //       expect(appController.getHello()).toBe('Hello World!');
  //     });
  //   });
});
