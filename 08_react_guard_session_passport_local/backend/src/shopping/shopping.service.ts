import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ShoppingService {
  /**
   * 商品一覧取得
   * @returns
   */
  getProducts() {
    const products = ['りんご', 'ぶどう', 'バナナ', 'キウイ'];
    return products;
  }

  /**
   * カートの初期化
   * @param req
   * @returns カートの商品
   */
  initCart(req: Request) {
    if (req.session['cart']) {
      return { products: req.session['cart'] };
    }
    return { products: [] };
  }

  /**
   * カートに商品を追加
   * @param req
   * @param product
   * @returns
   */
  addCart(req: Request, product: string) {
    // セッションのカートに商品を追加する
    if (!req.session['cart']) {
      req.session['cart'] = [] as string[];
    }
    req.session['cart'].push(product);
    return { products: req.session['cart'] };
  }

  /**
   * カートの商品をクリア
   */
  clearCart(req: Request) {
    // セッションのカートを空にする
    req.session['cart'].splice(0);
    return { products: req.session['cart'] };
  }
}
