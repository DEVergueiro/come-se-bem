import { OrderDTO } from '../domain/dto/order-dto';
import { FindOneOrderUsecase } from './find-one-order-usecase';

describe('FindOneOrderUsecase', () => {
  const order = {
    id: '1',
  } as OrderDTO;

  const fakeOrderRepository = {
    findOne: jest.fn(() => Promise.resolve(order)),
  } as any;

  it('should be defined', () => {
    const findOneOrderUsecase = new FindOneOrderUsecase(fakeOrderRepository);

    expect(findOneOrderUsecase).toBeDefined();
  });

  it('should be able to find one order', async () => {
    const findOneOrderUsecase = new FindOneOrderUsecase(fakeOrderRepository);

    const result = await findOneOrderUsecase.execute(order.id);

    expect(fakeOrderRepository.findOne).toHaveBeenCalled();
    expect(findOneOrderUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result.id).toBeDefined();
  });
});
