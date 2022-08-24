import { Test, TestingModule } from '@nestjs/testing';
import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

import { ProductController } from './product-controller';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductRepository],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
