import { OrderDTO } from '../domain/dto/order-dto';
import { UpdateOrderUsecase } from './update-order-usecase';

describe('UpdateOrderUsecase', () => {
  const order = {
    id: '1',
    client: 'Test',
    order_number: 22,
  } as OrderDTO;

  const newOrder = {
    id: '1',
    client: 'Test2',
    order_number: 223,
  } as OrderDTO;

  const fakeOrderRepository = {
    update: jest.fn(() => Promise.resolve(order)),
  } as any;

  it('should be defined', () => {
    const updateOrderUsecase = new UpdateOrderUsecase(fakeOrderRepository);

    expect(updateOrderUsecase).toBeDefined();
  });

  it('should be able to create one order', async () => {
    const updateOrderUsecase = new UpdateOrderUsecase(fakeOrderRepository);

    const result = await updateOrderUsecase.execute(order.id, newOrder);

    expect(fakeOrderRepository.update).toHaveBeenCalled();
    expect(updateOrderUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result.id).toBeDefined();
  });
});
