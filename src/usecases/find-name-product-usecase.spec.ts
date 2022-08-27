import { ProductDTO } from '../domain/dto/product-dto';
import { FindNameProductUsecase } from './find-name-product-usecase';

describe('FindNameProductUsecase', () => {
  const product = {
    name: 'Test',
  } as ProductDTO;

  const fakeProductRepository = {
    findName: jest.fn(() => Promise.resolve(product)),
  } as any;

  it('should be defined', () => {
    const findNameProductUsecase = new FindNameProductUsecase(
      fakeProductRepository,
    );

    expect(findNameProductUsecase).toBeDefined();
  });

  it('should be able to find one product', async () => {
    const findNameProductUsecase = new FindNameProductUsecase(
      fakeProductRepository,
    );

    const result = await findNameProductUsecase.execute(product.name);

    expect(fakeProductRepository.findName).toHaveBeenCalled();
    expect(findNameProductUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result).toBeDefined();
  });
});
