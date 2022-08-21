import { FindOneOrderUsecase } from './../../../usecases/find-one-order.usecase';
import { OrderDTO } from './../../../domain/dto/order.dto';
import { CreateOrderUsecase } from './../../../usecases/create-order.usecase';
import { OrderRepository } from 'src/infrastructure/database/repositories/order.repository';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order')
@Controller('order')
export class OrderController {
  private readonly createOrderUsecase: CreateOrderUsecase;
  private readonly findOneOrderUsecase: FindOneOrderUsecase;

  constructor(private readonly orderRepository: OrderRepository) {
    this.createOrderUsecase = new CreateOrderUsecase(
      this.orderRepository),
    this.findOneOrderUsecase = new FindOneOrderUsecase(
      this.orderRepository,
    );
  }

  @Post()
  async create(@Body() data: OrderDTO) {
    return this.createOrderUsecase.execute(data);
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.findOneOrderUsecase.execute(id);
  }
  
}
