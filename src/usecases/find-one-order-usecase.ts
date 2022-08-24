import { OrderRepository } from 'src/infrastructure/database/repositories/order-repository';

export class FindOneOrderUsecase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: string) {
    return this.orderRepository.findOne(id);
  }
}
