import { Test, TestingModule } from '@nestjs/testing';
import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

import { OrderController } from './order-controller';

describe('OrderController', () => {
  let controller: OrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderRepository],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
