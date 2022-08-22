import { ProductRepository } from 'src/infrastructure/database/repositories/product.repository';

export class FindOneProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string) {
    return this.productRepository.findOne(id);
  }
}
