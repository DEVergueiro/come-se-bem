import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { PrintOrderUsecase } from '../../../usecases/print-order-usecase';
import { OrderRepository } from '../../database/repositories/order-repository';

@ApiTags('print-order')
@Controller('print-order')
export class PrintOrderController {
  private readonly printOrderUsecase: PrintOrderUsecase;

  constructor(private readonly orderRepository: OrderRepository) {
    this.printOrderUsecase = new PrintOrderUsecase(this.orderRepository);
  }

  @ApiOperation({
    summary:
      'This route fetches the order by id and prints it on a thermal printer.',
  })
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.printOrderUsecase.execute(id);
  }
}
