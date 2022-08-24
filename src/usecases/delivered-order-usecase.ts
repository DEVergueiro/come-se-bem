import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

export class DeliveredOrderUsecase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute() {
    return this.orderRepository.findDelivered();
  }
}
