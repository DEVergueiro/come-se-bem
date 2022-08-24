import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

import { DeliveredOrderUsecase } from '../../../usecases/delivered-order-usecase';

@ApiTags('delivered')
@Controller('delivered')
export class OrderController {
  private readonly deliveredOrderUsecase: DeliveredOrderUsecase;

  constructor(private readonly orderRepository: OrderRepository) {
    this.deliveredOrderUsecase = new DeliveredOrderUsecase(
      this.orderRepository,
    );
  }

  @Get()
  async findDelivered() {
    return this.deliveredOrderUsecase.execute();
  }
}
