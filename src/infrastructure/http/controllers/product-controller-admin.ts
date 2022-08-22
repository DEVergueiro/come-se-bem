import { Body, Controller, Post } from '@nestjs/common';
import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

import { ProductDTO } from '../../../domain/dto/product-dto';
import { CreateProductUsecase } from '../../../usecases/create-product-usecase';

@Controller('admin/product')
export class ProductController {
  private readonly createProductUsecase: CreateProductUsecase;

  constructor(private readonly productRepository: ProductRepository) {
    this.createProductUsecase = new CreateProductUsecase(
      this.productRepository,
    );
  }

  @Post()
  async create(@Body() data: ProductDTO) {
    return this.createProductUsecase.execute(data);
  }
}
