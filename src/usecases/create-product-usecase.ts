import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

import { ProductDTO } from '../domain/dto/product-dto';

export class CreateProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(data: ProductDTO) {
    return this.productRepository.create(data);
  }
}
