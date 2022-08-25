import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

export class FindNameProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(nameProduct: string) {
    return this.productRepository.findName(nameProduct);
  }
}
