import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

import { PrintOrderUsecase } from '../../../usecases/print-order-usecase';

@ApiTags('print-order')
@Controller('print-order')
export class PrintOrderController {
  private readonly printOrderUsecase: PrintOrderUsecase;

  constructor(private readonly orderRepository: OrderRepository) {
    this.printOrderUsecase = new PrintOrderUsecase(this.orderRepository);
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.printOrderUsecase.execute(id);
  }
}
