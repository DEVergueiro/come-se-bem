import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

export class FindNameProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(name: string) {
    return this.productRepository.findFirst(name);
  }
}
