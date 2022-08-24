import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

import { FindIdProductUsecase } from '../../../usecases/find-id-product-usecase';
import { FindNameProductUsecase } from '../../../usecases/find-name-product-usecase';

@ApiTags('product')
@Controller('product')
export class ProductController {
  private readonly findIdProductUsecase: FindIdProductUsecase;

  private readonly findNameProductUsecase: FindNameProductUsecase;

  constructor(private readonly productRepository: ProductRepository) {
    this.findIdProductUsecase = new FindIdProductUsecase(
      this.productRepository,
    );
    this.findNameProductUsecase = new FindNameProductUsecase(
      this.productRepository,
    );
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.findIdProductUsecase.execute(id);
  }

  @Get('/:name')
  async findFirst(@Param('name') name: string) {
    return this.findNameProductUsecase.execute(name);
  }
}
