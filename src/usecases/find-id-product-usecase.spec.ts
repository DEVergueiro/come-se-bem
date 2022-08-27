import { ProductDTO } from '../domain/dto/product-dto';
import { FindIdProductUsecase } from './find-id-product-usecase';

describe('FindIdProductUsecase', () => {
  const product = {
    id: '1',
  } as ProductDTO;

  const fakeProductRepository = {
    findOne: jest.fn(() => Promise.resolve(product)),
  } as any;

  it('should be defined', () => {
    const findIdProductUsecase = new FindIdProductUsecase(
      fakeProductRepository,
    );

    expect(findIdProductUsecase).toBeDefined();
  });

  it('should be able to find one playlist', async () => {
    // Montar  a classe que tu testando
    const findIdProductUsecase = new FindIdProductUsecase(
      // tu tem que passar o que ela pede no constructor so que mockado => fake
      fakeProductRepository,
    );

    // executar o test
    const result = await findIdProductUsecase.execute('title-fake');

    // fazer com que ele quqbre caso n satisfaça alguma expectativa
    expect(fakeProductRepository.findOne).toHaveBeenCalled();
    expect(findIdProductUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result.id).toBeDefined();
  });
});
