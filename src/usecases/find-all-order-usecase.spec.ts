import { OrderDTO } from '../domain/dto/order-dto';
import { FindAllOrderUsecase } from './find-all-order-usecase';

describe('FindAllOrderUsecase', () => {
  const order = {
    id: '1',
  } as OrderDTO;

  const fakeOrderRepository = {
    findAll: jest.fn(() => Promise.resolve(order)),
  } as any;

  it('should be defined', () => {
    const findAllOrderUsecase = new FindAllOrderUsecase(fakeOrderRepository);

    expect(findAllOrderUsecase).toBeDefined();
  });

  it('should be able to find all orders', async () => {
    const findAllOrderUsecase = new FindAllOrderUsecase(fakeOrderRepository);

    const result = await findAllOrderUsecase.execute();

    expect(fakeOrderRepository.findAll).toHaveBeenCalled();
    expect(findAllOrderUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result).toBeDefined();
  });
});
