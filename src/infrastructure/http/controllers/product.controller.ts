import { ProductRepository } from 'src/infrastructure/database/repositories/product.repository';
import { Controller } from '@nestjs/common';


@Controller('product')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}
}
