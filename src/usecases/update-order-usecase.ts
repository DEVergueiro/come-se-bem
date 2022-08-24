import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

import { OrderDTO } from '../domain/dto/order-dto';

export class UpdateOrderUsecase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id, data: OrderDTO) {
    return this.orderRepository.update(id, data);
  }
}
