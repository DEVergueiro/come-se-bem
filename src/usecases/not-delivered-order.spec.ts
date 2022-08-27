import { OrderDTO } from '../domain/dto/order-dto';
import { NotDeliveredOrderUsecase } from './not-delivered-order-usecase';

describe('NotDeliveredOrderUsecase', () => {
  const order = {
    id: '1',
    delivered: false,
  } as OrderDTO;

  const fakeOrderRepository = {
    notDelivered: jest.fn(() => Promise.resolve(order)),
  } as any;

  it('should be defined', () => {
    const notDeliveredOrderUsecase = new NotDeliveredOrderUsecase(
      fakeOrderRepository,
    );

    expect(notDeliveredOrderUsecase).toBeDefined();
  });

  it('should be able to find one order', async () => {
    const notDeliveredOrderUsecase = new NotDeliveredOrderUsecase(
      fakeOrderRepository,
    );

    const result = await notDeliveredOrderUsecase.execute();

    expect(fakeOrderRepository.notDelivered).toHaveBeenCalled();
    expect(notDeliveredOrderUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result).toBeDefined();
  });
});
