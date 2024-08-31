/**
 * UseGuards()
 * コントローラクラスやコントローラクラスの特定のメソッド付与してGuardを適用するデコレータ
 *
 * https://docs.nestjs.com/guards#binding-guards
 */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AuthGuard } from '../guard/auth.guard';

/**
 * Animalコントローラ
 */
// @UseGuards(AuthGuard) // コントローラクラスのすべてのメソッドにGuardを適用(Binding Guard)
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  /**
   * Animalを返すAPI
   * @returns Animal
   */
  @UseGuards(AuthGuard) // コントローラクラスの特定のメソッドにGuardを適用(Binding Guard)
  @Get()
  getAnimal(): string {
    return this.animalService.getAnimal();
  }

  /**
   * Catを返すAPI
   * @returns Cat
   */
  @Get('/cat')
  getCat(): string {
    return this.animalService.getCat();
  }

  /**
   * Dogを返すAPI
   * @returns Dog
   */
  @Get('/dog')
  getDog(): string {
    return this.animalService.getDog();
  }
}
