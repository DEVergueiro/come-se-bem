import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { OrderDTO } from '../../../domain/dto/order-dto';
import { CreateOrderUsecase } from '../../../usecases/create-order-usecase';
import { FindAllOrderUsecase } from '../../../usecases/find-all-order-usecase';
import { FindOneOrderUsecase } from '../../../usecases/find-one-order-usecase';
import { UpdateOrderUsecase } from '../../../usecases/update-order-usecase';
import { OrderRepository } from '../../database/repositories/order-repository';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  private readonly createOrderUsecase: CreateOrderUsecase;

  private readonly findOneOrderUsecase: FindOneOrderUsecase;

  private readonly findAllOrderUsecase: FindAllOrderUsecase;

  private readonly updateOrderUsecase: UpdateOrderUsecase;

  constructor(private readonly orderRepository: OrderRepository) {
    this.createOrderUsecase = new CreateOrderUsecase(this.orderRepository);
    this.findOneOrderUsecase = new FindOneOrderUsecase(this.orderRepository);
    this.updateOrderUsecase = new UpdateOrderUsecase(this.orderRepository);
    this.findAllOrderUsecase = new FindAllOrderUsecase(this.orderRepository);
  }

  @ApiOperation({
    summary: 'Route for order creation.',
  })
  @Post()
  async create(@Body() data: OrderDTO) {
    return this.createOrderUsecase.execute(data);
  }

  @ApiOperation({
    summary: 'Route to fetch order by id.',
  })
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.findOneOrderUsecase.execute(id);
  }

  @ApiOperation({
    summary: 'Route to fetch all orders.',
  })
  @Get()
  async findAll() {
    return this.findAllOrderUsecase.execute();
  }

  @ApiOperation({
    summary: 'Route to update the order.',
  })
  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: OrderDTO) {
    return this.updateOrderUsecase.execute(id, data);
  }
}
