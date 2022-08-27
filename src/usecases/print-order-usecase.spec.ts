import { OrderDTO } from '../domain/dto/order-dto';
import { PrintOrderUsecase } from './print-order-usecase';

describe('PrintOrderUsecase', () => {
  const order = {
    id: '1',
  } as OrderDTO;

  const fakeOrderRepository = {
    printOrder: jest.fn(() => Promise.resolve(order)),
  } as any;

  it('should be defined', () => {
    const printOrderUsecase = new PrintOrderUsecase(fakeOrderRepository);

    expect(printOrderUsecase).toBeDefined();
  });

  it('should be able to find and print one order', async () => {
    const printOrderUsecase = new PrintOrderUsecase(fakeOrderRepository);

    const result = await printOrderUsecase.execute(order.id);

    expect(fakeOrderRepository.printOrder).toHaveBeenCalled();
    expect(printOrderUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result).toBeDefined();
  });
});
