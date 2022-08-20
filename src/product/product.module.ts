import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from '../infrastructure/http/controllers/product.controller';

@Module({
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
