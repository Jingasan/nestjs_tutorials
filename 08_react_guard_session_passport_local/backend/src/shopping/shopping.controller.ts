import { Controller, UseGuards, Get, Req, Query } from '@nestjs/common';
import { Request } from 'express';
import { ShoppingService } from './shopping.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import {
  ApiTags,
  ApiProduces,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('shopping')
@ApiTags('/shopping')
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingService) {}

  /**
   * 商品一覧取得
   * @returns
   */
  @UseGuards(AuthenticatedGuard)
  @Get('/get-products')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '商品の一覧取得' })
  @ApiResponse({ status: 200 })
  getProducts() {
    return this.shoppingService.getProducts();
  }

  /**
   * カートの初期化
   * @param req
   * @returns カートの商品
   */
  @UseGuards(AuthenticatedGuard)
  @Get('/init-cart')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'カートの初期化' })
  @ApiResponse({ status: 200 })
  initCart(@Req() req: Request) {
    return this.shoppingService.initCart(req);
  }

  /**
   * カートに商品を追加
   * @param req
   * @returns
   */
  @UseGuards(AuthenticatedGuard)
  @Get('/add-cart')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'カートに商品を追加' })
  @ApiResponse({ status: 200 })
  addCart(@Req() req: Request, @Query('product') product: string) {
    return this.shoppingService.addCart(req, product);
  }

  /**
   * カートの商品をクリアするAPI
   */
  @UseGuards(AuthenticatedGuard)
  @Get('/clear-cart')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'カートの商品クリア' })
  @ApiResponse({ status: 200 })
  clearCart(@Req() req: Request) {
    return this.shoppingService.clearCart(req);
  }
}
