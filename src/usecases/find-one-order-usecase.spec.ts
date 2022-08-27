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

  it('should be able to find one playlist', async () => {
    // Montar  a classe que tu testando
    const findOneOrderUsecase = new FindOneOrderUsecase(
      // tu tem que passar o que ela pede no constructor so que mockado => fake
      fakeOrderRepository,
    );

    // executar o test
    const result = await findOneOrderUsecase.execute('fake');

    // fazer com que ele quqbre caso n satisfaça alguma expectativa
    expect(fakeOrderRepository.findOne).toHaveBeenCalled();
    expect(findOneOrderUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result.id).toBeDefined();
  });
});
