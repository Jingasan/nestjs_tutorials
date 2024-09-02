import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { AppModule } from './app.module';
import { randomUUID } from 'crypto';

// セッションで扱うデータ（SessionData）の型宣言
declare module 'express-session' {
  interface SessionData {
    cart: string[];
  }
}

/**
 * アプリの起動処理
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // NestJS全体のAPIパスにPrefixを追加
  app.setGlobalPrefix('api');

  // Secure Cookieを発行する場合に必要な設定
  app.set('trust proxy', 1);
  // JSONをパースする際の上限サイズを設定
  app.use(express.json({ limit: '50mb' }));
  // URLEncodeされたボディをパースする際の上限サイズを設定
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  // Sessionの設定
  // デフォルトではセッションはインメモリに保管される
  // → APIサーバーが複数台になるような実運用環境下では利用できない
  // 実運用環境では必ずRedisやDBをセッションストアとして用いること
  app.use(
    session({
      secret: randomUUID(), // [Must] セッションIDを保存するCookieの署名に使用される, ランダムな値にすることを推奨
      name: 'session', // [Option] Cookie名, connect.id(default)(変更推奨)
      rolling: true, // [Option] アクセス時にセッションの有効期限をリセットする
      resave: false, // [Option] true(default):リクエスト中にセッションが変更されなかった場合でも強制的にセッションストアに保存し直す
      saveUninitialized: false, // [Option] true(default): 初期化されていないセッションを強制的にセッションストアに保存する
      cookie: {
        path: '/', // [Option] "/"(default): Cookieを送信するPATH
        httpOnly: true, // [Option] true(default): httpのみで使用, document.cookieを使ってCookieを扱えなくする
        maxAge: 30 * 1000, // [Option] Cookieの有効期限[ms]
        secure: 'auto', // [Option] auto(default): trueにすると、HTTPS接続のときのみCookieを発行する
        // trueを設定した場合、「app.set("trust proxy", 1)」を設定する必要がある。
        // Proxy背後にExpress(NestJS)を配置すると、Express(NestJS)自体はHTTPで起動するため、Cookieが発行されないが、
        // これを設定しておくことで、Express(NestJS)は自身がプロキシ背後に配置されていること、
        // 信頼された「X-Forwarded-*」ヘッダーフィールドであることを認識し、Proxy背後でもCookieを発行するようになる。
      },
    }),
  );
  // Passportの初期化
  app.use(passport.initialize());
  app.use(passport.session());

  // SwaggerUIページの有効化
  const config = new DocumentBuilder()
    .setTitle('API仕様書')
    .setDescription('API仕様書のサンプルです。')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // アプリを起動
  await app.listen(3000);
}
bootstrap();
