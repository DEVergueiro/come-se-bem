import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

import { OrderDTO } from '../domain/dto/order-dto';

export class CreateOrderUsecase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(data: OrderDTO) {
    return this.orderRepository.create(data);
  }
}
