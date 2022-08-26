import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

import { DeliveredOrderUsecase } from '../../../usecases/delivered-order-usecase';
import { NotDeliveredOrderUsecase } from '../../../usecases/not-delivered-order-usecase';

@ApiTags('delivered')
@Controller('delivered')
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

  @ApiOperation({
    summary: 'This route returns the orders delivered.',
  })
  @Get('/true')
  async delivered() {
    return this.deliveredOrderUsecase.execute();
  }

  @ApiOperation({
    summary: 'This route returns the orders undelivered.',
  })
  @Get('/false')
  async notDelivered() {
    return this.notDeliveredOrderUsecase.execute();
  }
}
