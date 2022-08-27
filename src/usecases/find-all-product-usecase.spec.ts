import { ProductDTO } from '../domain/dto/product-dto';
import { FindAllProductUsecase } from './find-all-product-usecase';

describe('FindAllProductUsecase', () => {
  const product = {
    id: '1',
    name: 'Test',
    value: 10,
  } as ProductDTO;

  const fakeProductRepository = {
    findAll: jest.fn(() => Promise.resolve(product)),
  } as any;

  it('should be defined', () => {
    const findAllProductUsecase = new FindAllProductUsecase(
      fakeProductRepository,
    );

    expect(findAllProductUsecase).toBeDefined();
  });

  it('should be able to find all products', async () => {
    const findAllProductUsecase = new FindAllProductUsecase(
      fakeProductRepository,
    );

    const result = await findAllProductUsecase.execute();

    expect(fakeProductRepository.findAll).toHaveBeenCalled();
    expect(findAllProductUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result).toBeDefined();
  });
});
