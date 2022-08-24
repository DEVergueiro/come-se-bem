import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

export class FindAllOrderUsecase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute() {
    return this.orderRepository.findAll();
  }
}
