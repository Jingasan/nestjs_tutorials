import { Injectable } from '@nestjs/common';

/**
 * Animalサービス
 */
@Injectable()
export class AnimalService {
  /**
   * Animalを返すメソッド
   * @returns Animal
   */
  getAnimal(): string {
    return 'Animal';
  }

  /**
   * Catを返すメソッド
   * @returns Cat
   */
  getCat(): string {
    return 'Cat';
  }

  /**
   * Dogを返すメソッド
   * @returns Dog
   */
  getDog(): string {
    return 'Dog';
  }
}
