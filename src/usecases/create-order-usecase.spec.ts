import { OrderDTO } from '../domain/dto/order-dto';
import { CreateOrderUsecase } from './create-order-usecase';

describe('CreateOrderUsecase', () => {
  const order = {
    id: '1',
    client: 'Test',
    order_number: 22,
  } as OrderDTO;

  const fakeOrderRepository = {
    create: jest.fn(() => Promise.resolve(order)),
  } as any;

  it('should be defined', () => {
    const createOrderUsecase = new CreateOrderUsecase(fakeOrderRepository);

    expect(createOrderUsecase).toBeDefined();
  });

  it('should be able to create one order', async () => {
    const createOrderUsecase = new CreateOrderUsecase(fakeOrderRepository);

    const result = await createOrderUsecase.execute(order);

    expect(fakeOrderRepository.create).toHaveBeenCalled();
    expect(createOrderUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result.id).toBeDefined();
  });
});
