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

  it('should be able to find one product', async () => {
    const findIdProductUsecase = new FindIdProductUsecase(
      fakeProductRepository,
    );

    const result = await findIdProductUsecase.execute(product.id);

    expect(fakeProductRepository.findOne).toHaveBeenCalled();
    expect(findIdProductUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result.id).toBeDefined();
  });
});
