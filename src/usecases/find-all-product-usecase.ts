import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

export class FindAllProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute() {
    return this.productRepository.findAll();
  }
}
