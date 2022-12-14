import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { FindAllProductUsecase } from '../../../usecases/find-all-product-usecase';
import { FindIdProductUsecase } from '../../../usecases/find-id-product-usecase';
import { FindNameProductUsecase } from '../../../usecases/find-name-product-usecase';
import { FindSixProductsUsecase } from '../../../usecases/find-six-products-usecase';
import { ProductRepository } from '../../database/repositories/product-repository';

@ApiTags('products')
@Controller('products')
export class ProductController {
  private readonly findIdProductUsecase: FindIdProductUsecase;

  private readonly findNameProductUsecase: FindNameProductUsecase;

  private readonly findSixProductsUsecase: FindSixProductsUsecase;

  private readonly findAllProductUsecase: FindAllProductUsecase;

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
    this.findAllProductUsecase = new FindAllProductUsecase(
      this.productRepository,
    );
  }

  @ApiOperation({
    summary: 'Route to fetch all products.',
  })
  @Get()
  async findAll() {
    return this.findAllProductUsecase.execute();
  }

  @ApiOperation({
    summary: 'Route to search for product by id.',
  })
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.findIdProductUsecase.execute(id);
  }

  @ApiOperation({
    summary: 'Route to search for product by name.',
  })
  @Get('/name/:nameProduct')
  async findName(@Param('nameProduct') nameProduct: string) {
    return this.findNameProductUsecase.execute(nameProduct);
  }

  @ApiOperation({
    summary: 'Route to fetch the six most requested products.',
  })
  @Get('/most-popular/six')
  async findSix() {
    return this.findSixProductsUsecase.execute();
  }
}
