import { ProductDTO } from '../domain/dto/product-dto';
import { FindSixProductsUsecase } from './find-six-products-usecase';

describe('FindSixProductsUsecase', () => {
  const product = {
    name: 'Test',
    value: 10,
    image: 'www.test.com/test.jpg',
  } as ProductDTO;

  const fakeProductRepository = {
    findSix: jest.fn(() => Promise.resolve(product)),
  } as any;

  it('should be defined', () => {
    const findSixProductsUsecase = new FindSixProductsUsecase(
      fakeProductRepository,
    );

    expect(findSixProductsUsecase).toBeDefined();
  });

  it('should be able to find six most popular products', async () => {
    const findSixProductsUsecase = new FindSixProductsUsecase(
      fakeProductRepository,
    );

    const result = await findSixProductsUsecase.execute();

    expect(fakeProductRepository.findSix).toHaveBeenCalled();
    expect(findSixProductsUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result).toBeDefined();
  });
});
