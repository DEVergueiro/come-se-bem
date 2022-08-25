import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

import { FindIdProductUsecase } from '../../../usecases/find-id-product-usecase';
import { FindNameProductUsecase } from '../../../usecases/find-name-product-usecase';
import { FindSixProductsUsecase } from '../../../usecases/find-six-products-usecase';

@ApiTags('product')
@Controller('product')
export class ProductController {
  private readonly findIdProductUsecase: FindIdProductUsecase;

  private readonly findNameProductUsecase: FindNameProductUsecase;

  private readonly findSixProductsUsecase: FindSixProductsUsecase;

  constructor(private readonly productRepository: ProductRepository) {
    this.findIdProductUsecase = new FindIdProductUsecase(
      this.productRepository,
    );
    this.findNameProductUsecase = new FindNameProductUsecase(
      this.productRepository,
    );
    this.findSixProductsUsecase = new FindSixProductsUsecase(
      this.productRepository,
    );
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.findIdProductUsecase.execute(id);
  }

  @Get('/name/:nameProduct')
  async findName(@Param('nameProduct') nameProduct: string) {
    return this.findNameProductUsecase.execute(nameProduct);
  }

  @Get('/most-popular/six')
  async findSix() {
    return this.findSixProductsUsecase.execute();
  }
}
