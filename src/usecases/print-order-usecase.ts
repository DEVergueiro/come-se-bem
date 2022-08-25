import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

export class PrintOrderUsecase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: string) {
    return this.orderRepository.printOrder(id);
  }
}
