import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

import { ProductDTO } from '../../../domain/dto/product-dto';
import { CreateProductUsecase } from '../../../usecases/create-product-usecase';

@ApiTags('admin products')
@Controller('admin/products')
export class AdminProductController {
  private readonly createProductUsecase: CreateProductUsecase;

  constructor(private readonly productRepository: ProductRepository) {
    this.createProductUsecase = new CreateProductUsecase(
      this.productRepository,
    );
  }

  @ApiOperation({
    summary: 'Route to create product.',
  })
  @Post()
  async create(@Body() data: ProductDTO) {
    return this.createProductUsecase.execute(data);
  }
}
