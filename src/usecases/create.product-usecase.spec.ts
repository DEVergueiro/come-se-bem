import { ProductDTO } from '../domain/dto/product-dto';
import { CreateProductUsecase } from './create-product-usecase';

describe('CreateProductUsecase', () => {
  const product = {
    id: '1',
    name: 'Test',
    value: 22,
    image: 'www.test.com/test.jpg',
  } as ProductDTO;

  const fakeProductRepository = {
    create: jest.fn(() => Promise.resolve(product)),
  } as any;

  it('should be defined', () => {
    const createProductUsecase = new CreateProductUsecase(
      fakeProductRepository,
    );

    expect(createProductUsecase).toBeDefined();
  });

  it('should be able to create one product', async () => {
    const createProductUsecase = new CreateProductUsecase(
      fakeProductRepository,
    );

    const result = await createProductUsecase.execute(product);

    expect(fakeProductRepository.create).toHaveBeenCalled();
    expect(createProductUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result.id).toBeDefined();
  });
});
