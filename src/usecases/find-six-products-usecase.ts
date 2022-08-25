import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

export class FindSixProductsUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute() {
    return this.productRepository.findSix();
  }
}
