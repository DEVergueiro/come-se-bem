import { Global, Module } from '@nestjs/common';

import { PrismaProvider } from './providers/prisma-provider';
import { OrderRepository } from './repositories/order-repository';
import { ProductRepository } from './repositories/product-repository';

@Global()
@Module({
  providers: [PrismaProvider, OrderRepository, ProductRepository],
  exports: [PrismaProvider, OrderRepository, ProductRepository],
})
export class DatabaseModule {}
