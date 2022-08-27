import { OrderDTO } from '../domain/dto/order-dto';
import { DeliveredOrderUsecase } from './delivered-order-usecase';

describe('DeliveredOrderUsecase', () => {
  const order = {
    id: '1',
    delivered: true,
  } as OrderDTO;

  const fakeOrderRepository = {
    delivered: jest.fn(() => Promise.resolve(order)),
  } as any;

  it('should be defined', () => {
    const deliveredOrderUsecase = new DeliveredOrderUsecase(
      fakeOrderRepository,
    );

    expect(deliveredOrderUsecase).toBeDefined();
  });

  it('should be able to find one order', async () => {
    const deliveredOrderUsecase = new DeliveredOrderUsecase(
      fakeOrderRepository,
    );

    const result = await deliveredOrderUsecase.execute();

    expect(fakeOrderRepository.delivered).toHaveBeenCalled();
    expect(deliveredOrderUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result).toBeDefined();
  });
});
