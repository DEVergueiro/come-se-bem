import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

export class NotDeliveredOrderUsecase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute() {
    return this.orderRepository.notDelivered();
  }
}
