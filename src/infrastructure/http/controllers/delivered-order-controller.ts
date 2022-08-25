import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

import { DeliveredOrderUsecase } from '../../../usecases/delivered-order-usecase';
import { NotDeliveredOrderUsecase } from '../../../usecases/not-delivered-order-usecase';

@ApiTags('delivereds')
@Controller('delivereds')
export class DeliveredOrderController {
  private readonly deliveredOrderUsecase: DeliveredOrderUsecase;

  private readonly notDeliveredOrderUsecase: NotDeliveredOrderUsecase;

  constructor(private readonly orderRepository: OrderRepository) {
    this.deliveredOrderUsecase = new DeliveredOrderUsecase(
      this.orderRepository,
    );
    this.notDeliveredOrderUsecase = new NotDeliveredOrderUsecase(
      this.orderRepository,
    );
  }

  @Get('/true')
  async delivered() {
    return this.deliveredOrderUsecase.execute();
  }

  @Get('/false')
  async notDelivered() {
    return this.notDeliveredOrderUsecase.execute();
  }
}
